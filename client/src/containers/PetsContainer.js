import React, { Component } from 'react';
import NewPet from '../components/NewPet'
import PetProfileContainer from './PetProfileContainer'

class PetsContainer extends Component {
    render() {
    return(
        <div>
            <h1>Hello from PetsContainer.</h1>
            <PetProfileContainer pets={this.props.pets} />
            <NewPet />
        </div>
    )}

}

export default PetsContainer;