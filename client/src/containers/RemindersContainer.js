import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReminderCard from '../components/ReminderCard'

class RemindersContainer extends Component {

    render() {
        const {reminders, pet} = this.props;
        const associatedReminders = reminders.filter(reminder => reminder.pet_id === pet.id)
    
        const reminderList = associatedReminders.map(reminder => {
        return <ReminderCard key={reminder.id} reminder={reminder} />
        })

    return(
        <div>
            {reminderList}
        </div>
    )}

}
const mapStateToProps = state => ({
    reminders: state.remindersReducer.reminders
    })

export default connect(mapStateToProps)(RemindersContainer);
