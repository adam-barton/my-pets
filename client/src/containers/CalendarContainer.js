import React, { Component } from 'react';
import {connect} from 'react-redux';
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)

const myEventsList = ["Hello", "event 1", "event 2"]

class CalendarContainer extends Component {

    render() {
        const myEvents = [  
            {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2019, 5, 9),
            end: new Date(2019, 5, 10),
          },
          {
            id: 1,
            title: 'Long Event',
            start: new Date(2019, 5, 11),
            end: new Date(2019, 5, 11),
          },]
        // const eventList = this.props.reminders.map(reminder => {
        //     myEvents.push({start: reminder.date, title: reminder.category, end: reminder.time})
        // })

        return(
            <BigCalendar
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            /> 
        //     <BigCalendar
        //     events={events}
        //     step={60}
        //     showMultiDayTimes
        //     defaultDate={new Date(2015, 3, 1)}
        //     localizer={localizer}
        //   />
        )}
}
const mapStateToProps = state => ({
    reminders: state.remindersReducer.reminders
    })

export default connect(mapStateToProps)(CalendarContainer);


// componentDidMount() {
//     this.props.fetchReminders()
//     this.props.fetchPets()
//   }

// render() {
//     const petsList = this.props.pets.map(
//         (pet, index) => <ProfileCard 
//         key={index} 
//         pet={pet}
//         deletePet={this.props.deletePet}
//         updatePet={this.props.updatePet}
//         />)
// return(
//     <div>
//         <h1>Hello from PetProfileContainer.</h1>
//         {petsList}
//     </div>
// )}