import React from 'react';

function ReminderCard(props) {

    const reminderClassname = () => { 
        if (new Date(props.reminder.displayable_date).toString() === new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).toString()) {
            return "ReminderToday"
        }   
    }

    return(
        <div className={reminderClassname()}>
            <h3>{props.reminder.category}</h3> 
            <p className="ReminderDate">When: {props.reminder.displayable_date}
            <br></br> 
            at 
            <br></br> 
            {props.reminder.displayable_time}</p>
            {/* <p>Time: {props.reminder.displayable_time}</p> */}
            <p>Notes: {props.reminder.notes}</p>
            <button onClick={() => props.deleteReminder(props.reminder.id)}> delete </button>
        </div>
    )
}

export default ReminderCard