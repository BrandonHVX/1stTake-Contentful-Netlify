// UserDetails.jsx
import React, { Component } from 'react';
import { Button, Carousel, Form } from "react-bootstrap";

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form name="student apps"
            method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Group >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="first"    placeholder='First Name'
                    onChange={this.props.handleChange('first')}
                    defaultValue={values.firstName}/>
  
    </Form.Group>
    <Form.Group >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="last"    placeholder='Last Name'
                    onChange={this.props.handleChange('last')}
                    defaultValue={values.lastName}/>
  
    </Form.Group>
        
             
         
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;