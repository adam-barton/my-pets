import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPets, addPet, deletePet, updatePet } from '../actions/petActions';
import {fetchReminders} from '../actions/reminderActions'
import ProfileCard from '../components/ProfileCard'
import Notify from '../components/Notify'

class PetProfileContainer extends Component {
    componentWillMount() {
        this.props.fetchReminders()
        this.props.fetchPets()
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
          <Notify today_reminders={this.props.today_reminders} />
            {petsList}
        </div>
    )}

}
const mapStateToProps = state => ({
    pets: state.petsReducer.pets,
    today_reminders: state.remindersReducer.today_reminders
    })

export default connect(mapStateToProps, {fetchPets, addPet, deletePet, updatePet, fetchReminders})(PetProfileContainer);
