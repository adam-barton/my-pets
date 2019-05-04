import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addReminder } from '../actions/ReminderActions';


class RemindersForm extends Component {

    state = {
      category: '',
      pet_id: '',
      notes: ''
    }
  
    handleChange = event => {
      this.setState({
            [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault();
        this.props.addReminder(this.state)
  
      this.setState({
        category: '',
        pet_id: '',
        notes: ''
      })
      return this.props.history.push("/")
    }

    render() {
      return (
        <div>
          <h3>Add a new reminder</h3>
          <form onSubmit={this.handleSubmit} >
                <br></br>
              <label>Category: 
                <input
                type="text" 
                name="category"
                onChange={this.handleChange} 
                value={this.state.category}
                />
              </label>
              <br></br>

            {/* <label>Animal Type: 
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
              <br></br> */}

            <label>Pet: 
                <input
                type="text" 
                name="pet_id"
                onChange={this.handleChange} 
                value={this.state.pet_id}
                />
              </label>
              <br></br>
{/*             
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
              <br></br> */}

              <label>notes: 
                <input
                type="text" 
                name="notes"
                onChange={this.handleChange} 
                value={this.state.notes}
                />
              </label>
              {/* <br></br>

              <label> Add an image
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*"
                  onChange={this.handleChange} 
                  value={this.state.image}
                 />
              </label> */}
              <br></br>
              <br></br>
            <input type="submit" />
         </form>
        </div>
      );
    }
  };

  export default connect(null, { addReminder })(RemindersForm);