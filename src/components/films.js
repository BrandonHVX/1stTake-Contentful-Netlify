import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default () => {
  return (
    <div>
      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>
              Stop waiting.
              <br />
              Start building.
            </h2>

            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
