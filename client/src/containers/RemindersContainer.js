import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteReminder} from '../actions/reminderActions'
import ReminderCard from '../components/ReminderCard'

class RemindersContainer extends Component {
    render() {
        const {reminders, pet, deleteReminder} = this.props;
        const associatedReminders = reminders.filter(reminder => reminder.pet_id === pet.id)
    
        const reminderList = associatedReminders.map(reminder => {
        return <ReminderCard key={reminder.id} reminder={reminder} deleteReminder={deleteReminder} />
        })

    return(
        <div className="reminders">
            {reminderList}
        </div>
    )}

}
const mapStateToProps = state => ({
    reminders: state.remindersReducer.reminders
    })

export default connect(mapStateToProps, {deleteReminder})(RemindersContainer);
