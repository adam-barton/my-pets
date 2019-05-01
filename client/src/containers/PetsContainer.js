import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { addPet, deletePet } from '../actions/petActions';
import NewPet from '../components/NewPet'
import PetProfileContainer from './PetProfileContainer'

class PetsContainer extends Component {
    render() {
    return(
        <div>
            <h1>Hello from PetsContainer.</h1>
            <PetProfileContainer pets={this.props.pets} deletePet={this.props.deletePet} />
            <NewPet addPet={this.props.addPet} />
        </div>
    )}

}
const mapDispatchToProps = dispatch => bindActionCreators({
    addPet,
    deletePet
  }, dispatch)


export default connect(null, mapDispatchToProps)(PetsContainer);