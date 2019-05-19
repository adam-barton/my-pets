import React from 'react';

function ReminderNotes(props) {
    return( 
        <div className="reminderNotes">
            <p>Notes: {props.reminder.notes}</p>
        </div>
    )
}

export default ReminderNotes