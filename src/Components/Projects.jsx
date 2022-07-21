import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCard";
import projImg1 from "../Assets/img/project-img1.png";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from 'react-on-screen';
export default function Projects() {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return(<section className="project" id="projects">
  <Container>
    <Row>
        <Col size={12}>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>}
</TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey="first" >Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Tab Three
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
      <Tab.Pane eventKey="first">
        <Row>
            {
                projects.map((project,index)=>{
                    return(
                        <ProjectCards 
                        key={index}
                            {...project}
                        />
                    )
                })
            }
        </Row>
      </Tab.Pane> 
       <Tab.Pane eventKey="second"><p>Lorem ipsum</p></Tab.Pane>
       <Tab.Pane eventKey="third"><p>Lorem ipsum</p></Tab.Pane>

    </Tab.Content>
    </Tab.Container>
        </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2}/>
  </section>);
}