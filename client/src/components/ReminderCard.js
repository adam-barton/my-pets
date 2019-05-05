import React from 'react';

function ReminderCard(props) {
    return(
        <div className="ReminderCard">
        {/* <p>Hello from Reminders</p> */}
            <h3>{props.reminder.category}</h3> 
            <button onClick={() => props.deleteReminder(props.reminder.id)}> delete </button>
            <p>Notes: {props.reminder.notes}</p>
        </div>
    )
}

export default ReminderCard