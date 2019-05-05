import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addReminder } from '../actions/reminderActions';


class RemindersForm extends Component {
    state = {
      category: '',
    //   pet_id: this.props.pets[0].id,
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
        // pet_id: this.props.pets[0].id,
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

              <label>Pet: 
                <select onChange={(e) => this.setState({pet_id: e.target.value})}>
                <option key={0} value={""}></option>
                    {this.props.pets.map((pet) => <option key={pet.id} value={pet.id}>{pet.name}</option>)}
                </select>
                </label><br></br>

              <label>notes: 
                <input
                type="text" 
                name="notes"
                onChange={this.handleChange} 
                value={this.state.notes}
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

  const mapStateToProps = state => ({
    pets: state.petsReducer.pets
    })

  export default connect(mapStateToProps, { addReminder })(RemindersForm);