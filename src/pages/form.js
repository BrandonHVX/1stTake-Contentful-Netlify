import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import {
  Button,
  Carousel,
  Form,
  Tab,
  Tabs,
  Nav,
  Col,
  Row
} from "react-bootstrap";
import styles from "./blog.module.css";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import { State } from "xstate";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      dob: "",
      age: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      home: "",
      cell: "",
      email: "",
      school: "",
      relation: "",
      ethnicity: "",
      grade: "",
      parentOneFirstName: "",
      parentOneLastName: "",
      parentOneAddress: "",
      parentOneCity: "",
      parentOneState: "",
      parentOneZip: "",
      parentOneHome: "",
      parentOneCell: "",
      parentOneEmail: "",
      parentTwoFirstName: "",
      parentTwoLastName: "",
      parentTwoAddress: "",
      parentTwoCity: "",
      parentTwoState: "",
      parentTwoZip: "",
      parentTwoHome: "",
      parentTwoCell: "",
      parentTwoEmail: ""
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "student apps", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  render() {
    const {
      first,
      last,
      dob,
      address,
      city,
      state,
      age,
      zip,
      home,
      cell,
      email,
      ethnicity,
      grade,
      school,
      parentOneRelation,
      parentTwoRelation,
      parentOneFirstName,
      parentOneLastName,
      parentOneAddress,
      parentOneCity,
      parentOneState,
      parentOneZip,
      parentOneHome,
      parentOneCell,
      parentOneEmail,
      parentTwoFirstName,
      parentTwoLastName,
      parentTwoAddress,
      parentTwoCity,
      parentTwoState,
      parentTwoZip,
      parentTwoHome,
      parentTwoCell,
      parentTwoEmail
    } = this.state;

    return (
      <Layout>
        <div style={{ background: "#fff" }}>
          <div className={styles.hero}>Student Enrollment</div>
          <div className="container">
            <section id="form">
              <div
                class=" section-heading mt-5 "
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <h3 class="mrb-15 text-gray ">1st Take Student Enrollment</h3>
                <hr className="divider mb-4" />

                <p>
                  Please fill out the application below and submit when
                  complete.
                </p>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12 text-center">
                    <form
                      class="needs-validation"
                      name="student apps"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      novalidate
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="student apps"
                      />
                      <div class=" small-heading">
                        <h4 class=" text-gray ">Student Information</h4>
                      </div>
                      <div class="form-row">
                        <div class="col-md-7">
                          {" "}
                          <div className="form-row">
                            <div class="form-group col-sm-7">
                              <h6 class="text-left text-none">First Name</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="first"
                                id="validationCustom01"
                                placeholder="First Name"
                                value={first}
                                onChange={this.handleChange}
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                            <div class="form-group col-sm-5">
                              <h6 class="text-left text-none">Student Name</h6>
                              <input
                                class="form-control "
                                type="text"
                                name="last"
                                placeholder="Last Name"
                                value={last}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-5">
                          <div className="form-row">
                            <div class="form-group col-sm-8">
                              <h6 class="text-left">Date of Birth</h6>
                              <input
                                class="form-control"
                                type="date"
                                name="dob"
                                placeholder="mm/dd/yyyy"
                                value={dob}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div class="form-group col-sm-4">
                              <h6 class="text-left">Age</h6>
                              <input
                                class="form-control"
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={age}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="col-md-7">
                          {" "}
                          <div className="form-row">
                            <div class="form-group col-sm-8">
                              <h6 class="text-left text-none">
                                Current School
                              </h6>
                              <input
                                class="form-control "
                                type="text"
                                name="school"
                                placeholder="Name of School"
                                value={school}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div class="form-group col-sm-4">
                              <h6 class="text-left text-none">Grade</h6>
                              <input
                                class="form-control "
                                type="number"
                                name="grade"
                                placeholder="Grade K-12"
                                value={grade}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-5">
                          <div className="form-row">
                            <div class="form-group col">
                              <h6 class="text-left">Ethnicity</h6>
                              <select
                                class="form-control"
                                type="select"
                                id="exampleFormControlSelect1"
                                name="ethnicity"
                                placeholder="Choose.."
                                value={ethnicity}
                                onChange={this.handleChange}
                              >
                                <option>Choose..</option>
                                <option>African American</option>
                                <option>Asian</option>
                                <option>Caucasian</option>
                                <option>Hispanic</option>
                                <option>Native American</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div class="form-group col">
                          <h6 class="text-left">Address</h6>
                          <input
                            class="form-control"
                            type="text"
                            name="address"
                            placeholder="Street, Apt #"
                            value={address}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group col-sm-4">
                          <h6 class="text-left">City</h6>
                          <input
                            class="form-control"
                            type="text"
                            name="city"
                            placeholder="City"
                            value={city}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group col-sm-2">
                          <h6 class="text-left">State</h6>
                          <input
                            class="form-control"
                            type="text"
                            name="state"
                            placeholder="State"
                            value={state}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div class=" small-heading">
                            <h4 class=" text-gray ">
                              Parent/Legal Guardian Information #1
                            </h4>
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-7 ">
                              <h6 class="text-left text-none">First Name</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentOneFirstName"
                                id="validationCustom01"
                                placeholder="First Name"
                                value={parentOneFirstName}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-5 ">
                              <h6 class="text-left text-none">Last Name</h6>
                              <input
                                class="form-control "
                                type="text"
                                name="parentOneLastName"
                                placeholder="Last Name"
                                value={parentOneLastName}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div class="form-group col-md-4 ">
                              <h6 class="text-left text-none">Relationship</h6>
                              <select
                                class="form-control"
                                type="select"
                                id="exampleFormControlSelect1"
                                name="parentOneRelation"
                                placeholder="Choose.."
                                value={parentOneRelation}
                                onChange={this.handleChange}
                              >
                                <option>Choose..</option>
                                <option>Mother</option>
                                <option>Father</option>
                                <option>Grandparent</option>
                                <option>Sibling</option>
                                <option>Legal Gaurdia</option>
                              </select>
                            </div>
                            <div class="form-group col-md-8 ">
                              <h6 class="text-left text-none">Address</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentOneAddress"
                                id="validationCustom01"
                                placeholder="Street, Apt #"
                                value={parentOneAddress}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">City</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentOneCity"
                                id="validationCustom01"
                                placeholder="City"
                                value={parentOneCity}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-2 ">
                              <h6 class="text-left text-none">State</h6>
                              <select
                                class="form-control"
                                type="select"
                                id="exampleFormControlSelect1"
                                name="parentOneState"
                                placeholder="Choose.."
                                value={parentOneState}
                                onChange={this.handleChange}
                              >
                                <option>FL</option>
                              </select>
                            </div>
                            <div class="form-group col-md-4 ">
                              <h6 class="text-left text-none">Zip</h6>
                              <input
                                class="form-control "
                                type="text"
                                name="parentOneZip"
                                placeholder="City"
                                value={parentOneZip}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">Home Phone</h6>
                              <input
                                class="form-control"
                                type="tel"
                                name="parentOneHome"
                                id="validationCustom01"
                                placeholder="555-555-555"
                                value={parentOneHome}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">Cell Phone</h6>
                              <input
                                class="form-control "
                                type="tel"
                                name="parentOneCell"
                                placeholder="555-555-555"
                                value={parentOneCell}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class=" small-heading">
                            <h4 class=" text-gray ">
                              Parent/Legal Guardian Information #2
                            </h4>
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-7 ">
                              <h6 class="text-left text-none">First Name</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentTwoFirstName"
                                id="validationCustom01"
                                placeholder="First Name"
                                value={parentTwoFirstName}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-5 ">
                              <h6 class="text-left text-none">Last Name</h6>
                              <input
                                class="form-control "
                                type="text"
                                name="parentTwoLastName"
                                placeholder="Last Name"
                                value={parentTwoLastName}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div class="form-group col-md-4 ">
                              <h6 class="text-left text-none">Relationship</h6>
                              <select
                                class="form-control"
                                type="select"
                                id="exampleFormControlSelect1"
                                name="parentTwoRelation"
                                placeholder="Choose.."
                                value={parentTwoRelation}
                                onChange={this.handleChange}
                              >
                                <option>Choose..</option>
                                <option>Mother</option>
                                <option>Father</option>
                                <option>Grandparent</option>
                                <option>Sibling</option>
                                <option>Legal Gaurdia</option>
                              </select>
                            </div>
                            <div class="form-group col-md-8 ">
                              <h6 class="text-left text-none">Address</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentTwoAddress"
                                id="validationCustom01"
                                placeholder="Street, Apt #"
                                value={parentTwoAddress}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">City</h6>
                              <input
                                class="form-control"
                                type="text"
                                name="parentTwoCity"
                                id="validationCustom01"
                                placeholder="City"
                                value={parentTwoCity}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-2 ">
                              <h6 class="text-left text-none">State</h6>
                              <select
                                class="form-control"
                                type="select"
                                id="exampleFormControlSelect1"
                                name="parentTwoState"
                                placeholder="Choose.."
                                value={parentTwoState}
                                onChange={this.handleChange}
                              >
                                <option>FL</option>
                              </select>
                            </div>
                            <div class="form-group col-md-4 ">
                              <h6 class="text-left text-none">Zip</h6>
                              <input
                                class="form-control "
                                type="text"
                                name="parentTwoZip"
                                placeholder="City"
                                value={parentTwoZip}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            {" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">Home Phone</h6>
                              <input
                                class="form-control"
                                type="tel"
                                name="parentTwoHome"
                                id="validationCustom01"
                                placeholder="555-555-555"
                                value={parentTwoHome}
                                onChange={this.handleChange}
                                required
                              />
                            </div>{" "}
                            <div class="form-group col-md-6 ">
                              <h6 class="text-left text-none">Cell Phone</h6>
                              <input
                                class="form-control "
                                type="tel"
                                name="parentTwoCell"
                                placeholder="555-555-555"
                                value={parentTwoCell}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary mt-5">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactForm;

{
  /* <form name="student apps" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
<input type="hidden" name="form-name" value="student apps" />
          <p>
            <label>
              Your Name: <input type="text" name="first" value={first} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="last" value={last} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              DOB: <input type="date" name="dob" value={dob} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              School <input type="text" name="school" value={school} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Grade <input type="text" name="grade" value={grade} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form> */
}
