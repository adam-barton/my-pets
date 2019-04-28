import React, { Component } from 'react';
import NewPet from '../components/newPet'

class PetsContainer extends Component {
    render() {
    return(
        <div>
            <h1>Hello from PetsContainer.</h1>
            <NewPet />
        </div>
    )}

}

export default PetsContainer;