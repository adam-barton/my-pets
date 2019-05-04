import React from 'react';
import ReminderCard from './ReminderCard'

function ProfileCard(props) {
    const remindersList = props.pet.reminders.map(
        (reminder, index) => <ReminderCard
        key={index} 
        reminder={reminder} 
        />)
    return(
        <div className="ProfileCard">
            <h1>{props.pet.name}</h1>
            <button onClick={() => props.deletePet(props.pet.id)}> delete {props.pet.name} </button>
            <p>Animal type: {props.pet.animal_type}</p>
            <p>Breed: {props.pet.breed}</p>
            <p>Medications: {props.pet.medications}</p>
            <p>Vet: {props.pet.vet_name} {props.pet.vet_phone}</p>
            {remindersList}
        </div>
    )
}

export default ProfileCard