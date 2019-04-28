import React, { Component } from 'react';
import ImageUpload from './ImageUpload'

class NewPet extends Component {

    state = {
      name: '',
      value: '',
      breed: '',
      meds: '',
      vetName: '',
      vetPhone: ''
    }
  
    handleChange = event => {
      this.setState({
            [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault();
      
  
      this.setState({
        name: '',
        value: '',
        breed: '',
        meds: '',
        vetName: '',
        vetPhone: ''
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
                <select name="animalType"value={this.state.animalType} onChange={this.handleChange}>
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
                name="vetName"
                onChange={this.handleChange} 
                value={this.state.vetName}
                />
                <input
                type="text" 
                name="vetPhone"
                onChange={this.handleChange} 
                value={this.state.vetPhone}
                />
              </label>
              <br></br>

              <label>Medications: 
                <input
                type="text" 
                name="meds"
                onChange={this.handleChange} 
                value={this.state.meds}
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
  
  export default NewPet;