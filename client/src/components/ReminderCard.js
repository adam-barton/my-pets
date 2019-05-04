import React from 'react';

function ReminderCard(props) {
    return(
        <div className="ReminderCard">
            <h1>{props.reminder.category}</h1>
            {/* <button onClick={() => props.deletePet(props.pet.id)}> delete {props.pet.name} </button> */}
            <p>Notes: {props.reminder.notes}</p>
        </div>
    )
}

export default ReminderCard