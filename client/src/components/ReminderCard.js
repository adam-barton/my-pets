import React from 'react';

function ReminderCard(props) {
    return(
        <div className="ReminderCard">
            <h3>{props.reminder.category}</h3> 
            <p>Day: {props.reminder.displayable_date} at {props.reminder.displayable_time}</p>
            {/* <p>Time: {props.reminder.displayable_time}</p> */}
            <p>Notes: {props.reminder.notes}</p>
            <button onClick={() => props.deleteReminder(props.reminder.id)}> delete </button>
        </div>
    )
}

export default ReminderCard