import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteReminder} from '../actions/reminderActions'
import ReminderCard from '../components/ReminderCard'
import Notify from '../components/Notify'

class RemindersContainer extends Component {

    render() {
        const {reminders, pet, deleteReminder} = this.props;
        const associatedReminders = reminders.filter(reminder => reminder.pet_id === pet.id)
    
        const reminderList = associatedReminders.map(reminder => {
            const reminderDate = new Date(reminder.displayable_date);
            const today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate());
        return <ReminderCard key={reminder.id} reminder={reminder} deleteReminder={deleteReminder} />
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

export default connect(mapStateToProps, {deleteReminder})(RemindersContainer);
