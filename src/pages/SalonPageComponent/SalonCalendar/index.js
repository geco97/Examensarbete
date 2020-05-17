import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import allLocales  from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';
import Reserve from '../../Modal/Reserve';
import './main.scss' // webpack must be configured to do this
import isEmpty from 'lodash.isempty';

export default class DemoApp extends React.Component {
  state={
    showPopUp:false,
    dateFCobject:{}
  }
  closePopup=()=>{
    this.setState({
      showPopUp:false,
      dateFCobject:{}
    })
  }
  render() {
    let isInLogad = false;
    if( !isEmpty(sessionStorage.getItem('jwt'))){
      isInLogad= true;
    } 
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