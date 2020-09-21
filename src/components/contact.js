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
      body: encode({ "form-name": "web messsage", ...this.state })
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
          <div>Student Enrollment</div>
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
                      name="web message"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      novalidate
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="web message"
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
                      </div>

                      <div className="row"></div>

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
