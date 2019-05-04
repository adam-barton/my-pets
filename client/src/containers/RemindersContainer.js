import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReminderCard from '../components/ReminderCard'

class RemindersContainer extends Component {

    render() {
        const reminders = this.props.reminders.map(
            (reminder, index) => <ReminderCard
            key={index} 
            reminder={reminder} 
            />)
    return(
        <div>
          <p>test</p>
            {reminders}
        </div>
    )}

}
const mapStateToProps = state => ({
    reminders: state.remindersReducer.reminders
    })

export default connect(mapStateToProps)(RemindersContainer);
