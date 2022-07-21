import React ,{useState,useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../Assets/img/header-img.svg";
import TypeWriter from "typewriter-effect";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import {
  BrowserRouter as Router
} from "react-router-dom";
export default function Banner() {
  
  return (
    <Router>
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <TrackVisibility >
        {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>
            {"Hi I'm Mukund "}
            <span className="wrap">
            <TypeWriter
              options={{
              strings: ['Web Developer', 'MERN Developer','Guitarist'],
              autoStart: true,
              loop: true,
               }}/>
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <HashLink to="#connect">
          <button onClick={() => console.log("connect")}>
            Let's Connect <ArrowRightCircle />
          </button>
          </HashLink>
          </div>}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
        <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
        </Col>
      </Row>
    </section>
    </Router>
  );
}
