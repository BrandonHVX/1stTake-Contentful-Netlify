import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Button, Col, Row, ButtonGroup } from "react-bootstrap";
import Scroll from "../components/Scroll";

import HeaderImage from "./Img/headerImg";
import VideoBg from "reactjs-videobg";
import HeroLogo from "./Img/logoImg";
import Video from "../components/video";
import classes from "./BackgroundVideo.module.css";

import ImgOne from "../images/ft01.jpg";
import ImgTwo from "../images/ft02.jpg";
import ImgThree from "../images/ft03.jpg";
import ImgFour from "../images/ft04.jpg";

import AwesomeSliderStyles from "react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const images = [
  {
    title: "Bali",
    description: "Bali",
    button: "Reserve Now",
    original: ImgOne,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Dubai",
    description: "Dubai",
    button: "Book Now",
    original: ImgTwo,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Jamaica",
    description: "Jamaica",
    button: "Book Now",
    original: ImgThree,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "London",
    description: "London",
    button: "Book Now",
    original: ImgFour,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

const SliderHeader = () => (
  <div>
    <div className="overlay-content">
      <div className="container h-100">
        <div className="row">
          <div className="col-lg-5 my-auto order-2 order-lg-1">
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
                <Button
                  href="#about"
                  variant="btn btn-outline-white btn-xl mt-4"
                >
                  Learn More
                </Button>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-7 my-auto order-1 order-lg-2">
            <HeaderImage />
          </div>
        </div>
      </div>
    </div>
    <div className="overlay" />

    <AutoplaySlider
      animation="foldOutAnimation"
      bullets={false}
      play={true}
      interval={6000}
    >
      <div data-src="https://firsttake.s3.amazonaws.com/ft01.jpg" />
      <div data-src="https://firsttake.s3.amazonaws.com/ft02.jpg" />
      <div data-src="https://firsttake.s3.amazonaws.com/ft03.jpg" />
      <div data-src="https://firsttake.s3.amazonaws.com/ft04.jpg" />
    </AutoplaySlider>
  </div>
);

export default SliderHeader;
