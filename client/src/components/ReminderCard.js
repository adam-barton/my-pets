import React from 'react';

function ReminderCard(props) {
    return(
        <div className="ReminderCard">
        {/* <p>Hello from Reminders</p> */}
            <h3>{props.reminder.category}</h3> 
            <p>Date: {props.reminder.date}</p>
            <p>Notes: {props.reminder.notes}</p>
            <button onClick={() => props.deleteReminder(props.reminder.id)}> delete </button>
        </div>
    )
}

export default ReminderCard