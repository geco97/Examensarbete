import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import allLocales  from '@fullcalendar/core/locales-all';

import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

  render() {
    return (
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
        plugins={[ dayGridPlugin,timeGridPlugin  ]} 
        />
    )
  }
}