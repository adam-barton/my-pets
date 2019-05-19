import React from 'react';
import RemindersContainer from '../containers/RemindersContainer';
import Button from 'react-bootstrap/Button';

function ProfileCard(props) {

    return(
        <div className="ProfileCard">
            <h1>{props.pet.name}</h1>
            <p>Animal type: {props.pet.animal_type}</p>
            <p>Breed: {props.pet.breed}</p>
            <p>Medications: {props.pet.medications}</p>
            <p>Vet: {props.pet.vet_name} {props.pet.vet_phone}</p>
            <RemindersContainer pet={props.pet} />
            <Button variant="outline-danger" onClick={() => props.deletePet(props.pet.id)}> delete {props.pet.name} </Button>
        </div>
    )
}

export default ProfileCard