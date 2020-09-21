import React, { Component } from 'react';
import { Button, Carousel, Form, ListGroup } from "react-bootstrap";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Confirmation extends Component{
    saveAndContinue = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "student apps", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
   
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { first, last, email, age, city, country }} = this.props;

        return(
            <Form    name="student apps"
            method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="student apps" />
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <ListGroup>
                <Form.Control type="text" name="first" value={first}/>
                    <ListGroup.Item>
                  
                      First Name: {first}
                    </ListGroup.Item>
                    <ListGroup.Item>
                
               Last Name: {last}
                    </ListGroup.Item>
                    <ListGroup.Item>
               
                 
                            <a href='mailto:jack@semantic-ui.com'>{email}</a>
                      
                    </ListGroup.Item>
                    <ListGroup.Item>
                
                       {age} Years
                    </ListGroup.Item>
                    <ListGroup.Item>
              
                     {city}, {country}
                    </ListGroup.Item>
                </ListGroup>

                <Button onClick={this.back}>Back</Button>
                <Button type="submit" onClick={this.saveAndContinue}>Confirm</Button>
            </Form>
        )
    }
}

export default Confirmation;