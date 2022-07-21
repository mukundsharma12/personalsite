import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm  from "./MailchimpForm";
import logo from "../Assets/img/ms-logo.png";
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";
export default function Footer(){
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <MailchimpForm />
              <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/mukundsharma12/"><img src={navIcon1} alt="Icon" /></a>
                  <a href="https://www.facebook.com/mukund.sharma.161009"><img src={navIcon2} alt="Icon" /></a>
                  <a href="https://www.instagram.com/mukundsharma12/"><img src={navIcon3} alt="Icon" /></a>
                </div>
                <p>Copyright 2022. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
}
