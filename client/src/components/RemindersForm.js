import React, { Component } from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addReminder } from '../actions/reminderActions';

class RemindersForm extends Component {
    state = {
      category: '',
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
        notes: ''
      })
      return this.props.history.push("/")
    }

    setDay = event => {
      const day = event.toString().slice(0, 15)
      const time = event.toString().slice(16, 21)
      this.setState({
        displayable_date: day,
        displayable_time: time,
        date: event
      })
    }

    render() {
      return (
        <div>
          <h3>Add a new reminder</h3>
          <form onSubmit={this.handleSubmit} >
                <br></br>
                <label> Date: </label>
                <DatePicker
                  selected={this.state.date}
                  onChange={(e) => this.setDay(e)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={1}
                  dateFormat="MMMM d, yyyy"
                  timeCaption="time"
                />
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