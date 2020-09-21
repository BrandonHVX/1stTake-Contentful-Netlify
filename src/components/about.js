import React from "react";
import Img from "gatsby-image";

import { Button, Modal } from "react-bootstrap";

import ReactPlayer from "react-player/youtube";
import WhyImage from "./Img/whyImg";
import Image from "./Img/aboutImg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <ReactPlayer
          width="100%"
          url="https://www.youtube.com/watch?v=NHuVM9_imrE&t=18s"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AboutPlayButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="btn btn-outline mt-3" onClick={() => setModalShow(true)}>
        Play Video
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default () => (
  <div className="about-page">
    <section class="about" id="about">
      <div className="about-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2 mt-5 ">
              <Image />
              <i
                id="play-video"
                class="btn icon-btn btn-default video-play-button"
                href="#"
              >
                <span></span>
              </i>
            </div>
            <div class="col-md-12 col-lg-6 col-xl-6 mt-4 order-1 order-lg-2  ">
              <div className="section-heading-about">
                <h3 className=" mt-0">About Us</h3>
                <hr className="divider my-4" />
              </div>
              <h2>
                The 1st Take will serve as an
                <span class="display-font"> interactive </span> central
                connection between{" "}
                <span class="display-font">
                  {" "}
                  arts, business, media and entertainment.
                </span>
              </h2>

              <p>
                Our mission is to enrich the young minds of our community by
                providing them with hands-on training that centers around the
                complete process of filmmaking.
              </p>

              <AboutPlayButton />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="why-section bg-silver ">
      <div class="why-content">
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 col-xl-6 wow fadeInRight animated"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <h2 class="mrb-25">Why 1st Take?</h2>

              <div class="icon-box ">
                <div class="icon-details ">
                  <h4 class="icon-box-title mrb-10">
                    Education and College Readiness
                  </h4>
                  <p>
                    1st Take Youth Film Program will be dedicated to teaching
                    the youth career and life skills through hands-on coaching
                    that centers around the complete process of filmmaking.
                  </p>
                </div>
              </div>
              <div class="icon-box">
                <div class="icon-details ">
                  <h4 class="icon-box-title mrb-10">
                    Entrepreneurship and Leadership Skills
                  </h4>
                  <p>
                    Students will use entrepreneurship, leadership and team
                    skills to develop content. They will learn to write,
                    produce, schedule, budget, create, edit/finalize, market and
                    sell their projects.{" "}
                  </p>
                </div>
              </div>
              <div class="icon-box">
                <div class="icon-details ">
                  <h4 class="icon-box-title mrb-10">Exposure</h4>
                  <p>
                    Students content that is socially aware and preserving the
                    history of their community while getting major exposure
                    globally on urban streaming network
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-12 col-xl-6 wow fadeInLeft animated"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <WhyImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
