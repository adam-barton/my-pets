import React, { Component } from 'react';
import ProfileCard from '../components/ProfileCard'

class PetProfileContainer extends Component {
    render() {
        const petsList = this.props.pets.map(
            (pet, index) => <ProfileCard 
            key={index} 
            pet={pet} 
            />)
    return(
        <div>
            <h1>Hello from PetProfileContainer.</h1>
            {petsList}
        </div>
    )}

}

export default PetProfileContainer;