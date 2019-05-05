import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux'
import { fetchPets, addPet, deletePet, updatePet } from '../actions/petActions';
import {fetchReminders} from '../actions/reminderActions'
import ProfileCard from '../components/ProfileCard'

class PetProfileContainer extends Component {
    componentDidMount() {
        this.props.fetchPets()
        this.props.fetchReminders()
      }

    render() {
        const petsList = this.props.pets.map(
            (pet, index) => <ProfileCard 
            key={index} 
            pet={pet}
            deletePet={this.props.deletePet}
            updatePet={this.props.updatePet}
            />)
    return(
        <div>
            <h1>Hello from PetProfileContainer.</h1>
            {petsList}
        </div>
    )}

}
const mapStateToProps = state => ({
    pets: state.petsReducer.pets
    })

export default connect(mapStateToProps, {fetchPets, addPet, deletePet, updatePet, fetchReminders})(PetProfileContainer);
