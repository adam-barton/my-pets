import React from 'react';
import Notify from './Notify'
import { useAlert } from 'react-alert'

function ReminderCard(props) {
    const alert = useAlert()

    const reminderClassname = () => { 
        const reminderDate = new Date(props.reminder.displayable_date);
        const today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
        if (reminderDate.toString() === today.toString()) {
            return "ReminderToday"
        }   else {
            return "ReminderCard"
        }
    }

    return(
        <div className={reminderClassname()}>
        <Notify reminder={props.reminder} />
        {/* <button
                onClick={() => {
                alert.show(<div><ReminderCard reminder={props.reminder} /></div>)
            }} > Show Alert</button> */}
            <h3>{props.reminder.category}</h3> 
            <p className="ReminderDate">When:<b> {props.reminder.displayable_date}
            <br></br> 
            at 
            <br></br> 
            {props.reminder.displayable_time}</b></p>
            <p>Notes: {props.reminder.notes}</p>
            <button onClick={() => props.deleteReminder(props.reminder.id)}> delete </button>
        </div>
    )
}

export default ReminderCard
