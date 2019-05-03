import React from 'react';

function ProfileCard(props) {

    return(
        <div>
            <h1>{props.pet.name}</h1>
            <button onClick={() => props.deletePet(props.pet.id)}> delete {props.pet.name}'s profile' </button>
            <p>Animal type: {props.pet.animal_type}</p>
            <p>Breed: {props.pet.breed}</p>
            <p>Medications: {props.pet.medications}</p>
            <p>Vet: {props.pet.vet_name} {props.pet.vet_phone}</p>
        </div>
    )
}

export default ProfileCard