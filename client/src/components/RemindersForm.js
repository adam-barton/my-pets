import React, { Component } from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addReminder } from '../actions/reminderActions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

          <Form className="FormContainer" onSubmit={this.handleSubmit} >

            <Form.Group controlId="reminderForm.formBasicCategory">
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.name} 
                type="text" 
                name="category"
                placeholder="Reminder" />
            </Form.Group>

            <Form.Group controlId="reminderForm.ControlSelect"
              onChange={(e) => this.setState({pet_id: e.target.value})}
                >             
                <Form.Control as="select" name="pet">
                <option value="">Pet</option>                    
                {/* <option key={0} value={""}></option> */}
                    {this.props.pets.map((pet) => <option key={pet.id} value={pet.id}>{pet.name}</option>)}
              </Form.Control>
            </Form.Group>


            <Form.Group controlId="reminderForm.formBasicNotes">
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.name} 
                type="textarea" 
                name="notes"
                placeholder="Notes" />
            </Form.Group>

            <Form.Group controlId="reminderForm.formBasicDate">
              Date  
              <DatePicker
                    selected={this.state.date}
                    onChange={(e) => this.setDay(e)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    dateFormat="MMMM d, yyyy"
                    timeCaption="time"
                  />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>
        </div>
      );
    }
  };

  const mapStateToProps = state => ({
    pets: state.petsReducer.pets
    })

  export default connect(mapStateToProps, { addReminder })(RemindersForm);