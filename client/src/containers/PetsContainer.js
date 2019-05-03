// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { fetchPets, addPet, deletePet } from '../actions/petActions';
// import NewPet from '../components/NewPet'
// import PetProfileContainer from './PetProfileContainer'



// class PetsContainer extends Component {
//     componentDidMount() {
//         this.props.fetchPets()
//       }

//     render() {
//     return(
//         <div>
//             <h1>Hello from PetsContainer.</h1>
//             <PetProfileContainer pets={this.props.pets} deletePet={this.props.deletePet} />

//         </div>
//     )}

// }
// const mapStateToProps = state => ({
//     pets: state.petsReducer.pets
//     })

// export default connect(mapStateToProps, {fetchPets, addPet, deletePet})(PetsContainer);
