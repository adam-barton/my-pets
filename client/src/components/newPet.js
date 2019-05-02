import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addPet } from '../actions/petActions';


class NewPet extends Component {

    state = {
      name: '',
      animal_type: '',
      breed: '',
      medications: '',
      vet_name: '',
      vet_phone: '',
      image: ''
    }
  
    handleChange = event => {
      this.setState({
            [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault();
        this.props.addPet(this.state)
  
      this.setState({
        name: '',
        animal_type: '',
        breed: '',
        medications: '',
        vet_name: '',
        vet_phone: '',
        image: ''
      })
  
    }
    render() {
      return (
        <div>
          <h3>Add a new pet</h3>
          <form onSubmit={this.handleSubmit}>
                <br></br>
              <label>Name: 
                <input
                type="text" 
                name="name"
                onChange={this.handleChange} 
                value={this.state.name}
                />
              </label>
              <br></br>

            <label>Animal Type: 
                <select name="animal_type"value={this.state.animal_type} onChange={this.handleChange}>
                    <option value=""></option>                    
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="housefly">Housefly</option>
                    <option value="rock">Rock</option>
                    <option value="goat">Goat</option>
                    <option value="elephant">Elephant</option>
                    <option value="snake">Snake</option>
                </select>
              </label>
              <br></br>

            <label>Breed: 
                <input
                type="text" 
                name="breed"
                onChange={this.handleChange} 
                value={this.state.breed}
                />
              </label>
              <br></br>
            
              <label>Vet: 
                <input
                type="text" 
                name="vet_name"
                onChange={this.handleChange} 
                value={this.state.vet_name}
                />
                <input
                type="text" 
                name="vet_phone"
                onChange={this.handleChange} 
                value={this.state.vet_phone}
                />
              </label>
              <br></br>

              <label>Medications: 
                <input
                type="text" 
                name="medications"
                onChange={this.handleChange} 
                value={this.state.medications}
                />
              </label>
              <br></br>

              <label> Add an image
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*"
                  onChange={this.handleChange} 
                  value={this.state.image}
                 />
              </label>
              <br></br>
              <br></br>
            <input type="submit" />
         </form>
        </div>
      );
    }
  };

  export default connect(null, { addPet })(NewPet);