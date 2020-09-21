import React from "react";
import "./layout.scss";
import Container from "./container";
import Navigation from "./navigation";
import HeroTwo from "./herotwo";
import VideoBg from "reactjs-videobg";
import HeroLogo from "./Img/logoImg";
import Video from "../components/video";
import poster from "../images/first-take.jpg";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />

        {children}
      </div>
    );
  }
}

export default Template;
