import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Button, Carousel } from "react-bootstrap";
import Scroll from "../components/Scroll";
import styles from "./hero.module.css";
import HeaderImage from "./Img/headerImg";
import HeroLogo from "./Img/logoImg";

export default () => (
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-6 my-auto order-2 order-lg-1">
          <div className="header-content">
            <h2>
              Our mission is to{" "}
              <span className="display-font">
                Enrich The Young Minds of our Community
              </span>{" "}
              providing them with hands-on training that centers around the
              complete process of filmmaking.
            </h2>
            <Scroll type="id" element="about">
              <Button href="#about" variant="btn btn-outline-white btn-xl mt-5">
                Learn More
              </Button>
            </Scroll>
          </div>
        </div>
        <div className="col-lg-6 my-auto order-1 order-lg-2">
          <HeaderImage />
        </div>
      </div>
    </div>
  </header>
);
