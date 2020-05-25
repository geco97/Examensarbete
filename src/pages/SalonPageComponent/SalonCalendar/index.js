import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import allLocales  from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';
import Reserve from '../../Modal/Reserve';
import './main.scss' // webpack must be configured to do this
import isEmpty from 'lodash.isempty';
import SalonGallery from '../SalonGallery';


const events =	[{
  id: 1,
  title: 'All Day Event',
  start: '2020-05-01'
},
{
  id: 2,
  title: 'Long Event',
  start: '2017-05-07',
  end: '2020-05-10'
},
{
  id: 3,
  title: 'Repeating Event',
  start: '2020-05-09T16:00:00'
},
{
  id: 4,
  title: 'Repeating Event',
  start: '2020-05-16T16:00:00'
},
{
  id: 5,
  title: 'Conference',
  start: '2020-05-11',
  end: '2020-05-13'
},
{
  id: 6,
  title: 'Meeting',
  start: '2020-05-12T10:30:00',
  end: '2020-05-12T12:30:00'
},
{
  id: 7,
  title: 'Lunch',
  start: '2020-05-12T12:00:00'
},
{
  id: 8,
  title: 'Meeting',
  start: '2020-05-12T14:30:00'
},
{
  id: 9,
  title: 'Happy Hour',
  start: '2020-05-12T17:30:00'
},
{
  id: 10,
  title: 'Dinner',
  start: '2020-05-12T20:00:00'
},
{
  id: 11,
  title: 'Birthday Party',
  start: '2020-05-13T07:00:00'
},
{
  id: 12,
  title: 'Click for Google',
  url: 'http://google.com/',
  start: '2020-05-28'
}
];   
export default class DemoApp extends React.Component {
  state={
    showPopUp:false,
    dateFCobject:{},
    event:[]
  }
  closePopup=()=>{
    this.setState({
      showPopUp:false,
      dateFCobject:{}
    })
  }
  /*componentDidUpdate = (prevProps, prevState)=> {
    
    let eventA =[];
    if(prevState.TicketList !== this.props.TicketList ){
      this.props.TicketList.map((Card)=>{
        eventA.push(
          {
            id:Card._id,
            title:this.props.currentSalon.Name,
            start:`${Card.Date}T${Card.Time}`
          }
        )
      })
     this.setState({
      event:eventA
    })    
   }
  }*/
  render() {
    let isInLogad = false;
    if( !isEmpty(sessionStorage.getItem('jwt'))){
      isInLogad= true;
    } 
   
   console.log(this.props)
    
    return (
      <>
      <FullCalendar 
        locales={allLocales}
        locale= {'sv'}
        defaultView="timeGridWeek" 
        weekends={true}
        firstDay={1}
        datesAboveResources={true}
        minTime="07:00"
        maxTime="20:00"
        timeZone="Europe/Stockholm"
        rerenderDelay={10}
        events={this.props.TicketList}
        visibleRange= {
          function(currentDate) {
            // Generate a new date for manipulating in the next step
            var startDate = new Date(currentDate.valueOf());
            var endDate = new Date(currentDate.valueOf());
        
            // Adjust the start & end dates, respectively
            startDate.setDate(startDate.getDate() - 1); // One day in the past
            endDate.setDate(endDate.getDate() + 2); // Two days into the future
        
            return { start: startDate, end: endDate };
          }
        }
        allDaySlot={false}
        timeGridEventMinHeight={20}
        plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin  ]} 
        dateClick={ isInLogad===true? this.handleDateClick:""}
        />
        <Reserve showmodal={this.state.showPopUp} dateFCobject={this.state.dateFCobject} user={this.props.user} salon={this.props.currentSalon} closePopup={this.closePopup}/>
        </>
    )
  }
  handleDateClick = (arg) => {
    this.setState({
      showPopUp:true,
      dateFCobject:arg
    })
    /*
    if (window.confirm('Would you like to add a meal to ' + arg.dateStr + ' ?')) {
      console.log(arg);
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }*/
  }
}