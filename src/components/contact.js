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
      message: "",
      subject: "",
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
      message,
      subject,
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
        <section id="contact" class="page-section contact section-bg">
          <div class="container" data-aos="fade-up">
            <div
              class=" section-heading"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <h3 class="mrb-15 text-gray "> Contact</h3>
              <hr className="divider mb-4" />
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="info-box mb-4">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>100 NW 17th Street, Miami, FLorida 33127</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>1stakeyouthfilm@gmail.com</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1-305-555-5555</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps?q=100%20NW%2017th%20Street%2C%20Miami%2C%20FLorida%2033127&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  className="md-height"
                ></iframe>
              </div>

              <div class="col-lg-6">
                <form
                  class="needs-validation"
                  name="web message"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  novalidate
                >
                  <input type="hidden" name="form-name" value="web message" />
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="first"
                        id="validationCustom01"
                        placeholder="Name"
                        value={first}
                        onChange={this.handleChange}
                        required
                      />
                      <div class="validate"></div>
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        id="validationCustom01"
                        placeholder="E-mail"
                        value={email}
                        onChange={this.handleChange}
                        required
                      />
                      <div class="validate"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="subject"
                      id="validationCustom01"
                      placeholder="Subject"
                      value={subject}
                      onChange={this.handleChange}
                      required
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      type="message"
                      name="message"
                      id="validationCustom01"
                      placeholder="Message"
                      value={message}
                      onChange={this.handleChange}
                      required
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <div class="validate"></div>
                  </div>

                  <div class="text-center">
                    <button className="btn btn-outline" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default ContactForm;

{
  /* <div className="form-row">
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
    <div class="invalid-feedback">Please choose a username.</div>
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
</div>; */
}
