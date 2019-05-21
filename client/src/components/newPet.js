import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addPet } from '../actions/petActions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



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
      return this.props.history.push("/")
    }

    render() {
      return (
        <div className="PetFormContainer">
          <h3>Add a new pet</h3>
          <Form className="PetForm"onSubmit={this.handleSubmit} >
            <Form.Group controlId="petForm.formBasicName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.name} 
                type="text" 
                name="name"
                placeholder="Pet's Name" />
            </Form.Group>

            <Form.Group controlId="petForm.ControlSelect"
                onChange={this.handleChange} 
                value={this.state.animal_type} 
                >
                {/* <Form.Label>Pet Type</Form.Label> */}
                <Form.Control as="select" name="animal_type">
                <option value="">Pet Type</option>                    
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="housefly">Housefly</option>
                    <option value="rock">Rock</option>
                    <option value="goat">Goat</option>
                    <option value="elephant">Elephant</option>
                    <option value="snake">Snake</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="petForm.formBasicBreed">
              {/* <Form.Label>Breed</Form.Label> */}
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.breed} 
                type="text" 
                name="breed"
                placeholder="Breed" />
            </Form.Group>

            <Form.Group controlId="petForm.formGridVetName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.vet_name} 
                type="text" 
                name="vet_name"
                placeholder="Vet Name" />
                </Form.Group>
                
            <Form.Group controlId="petForm.formGridVetPhone">
                {/* <Form.Label>Phone</Form.Label> */}
                <Form.Control
                onChange={this.handleChange} 
                value={this.state.vet_phone} 
                type="text" 
                name="vet_phone"
                placeholder="Vet Phone" />
            </Form.Group>

            <Form.Group controlId="petForm.formBasicMeds">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                onChange={this.handleChange} 
                value={this.state.medications} 
                type="text" 
                name="medications"
                placeholder="Pet's Medications" />
            </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
         </Form>
        </div>
      );
    }
  };

  export default connect(null, { addPet })(NewPet);