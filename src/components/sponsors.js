import React from "react";
import PropTypes from "prop-types";
import SponsorsLogo from "../components/Img/sponsors";
import { Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
  return (
    <div>
      <section className="sponsors">
        <div className="sponsors-content">
          <div class="section-heading mt-5 ">
            <h3 class="mrb-15 text-gray ">Sponsors</h3>
            <hr className="divider mb-4" />
          </div>
          <SponsorsLogo />
        </div>
      </section>
    </div>
  );
};
