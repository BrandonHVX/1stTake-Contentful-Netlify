import React, { Component } from 'react';
import { Button, Carousel, Form } from "react-bootstrap";
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form name="student apps"
        method="post" data-netlify="true" data-netlify-honeypot="bot-field"  color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Group >
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" name="age"   placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}/>
  
    </Form.Group>


            <Form.Group >
      <Form.Label>City</Form.Label>
      <Form.Control type="text" name="city"   placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}/>
  
    </Form.Group>
        
    <Form.Group >
      <Form.Label>Country</Form.Label>
      <Form.Control type="text" name="country"   placeholder='Country'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}/>
  
    </Form.Group>
          
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;