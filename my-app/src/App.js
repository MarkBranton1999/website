import Mark from './Mark.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import Projects from './projects.json'
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

var Rainbow = require('rainbowvis.js');
var myRainbow = new Rainbow();
myRainbow.setSpectrum('skyblue', 'darkcyan', 'darkgreen', 'yellowgreen', 'darkgoldenrod', 'darkorange')

function App(props) {

  const [height, setHeight] = useState(document.documentElement.scrollHeight);
  const [color, setColor] = useState("#" + myRainbow.colorAt(window.pageYOffset));

  useEffect(() => {
    function updateColorOnScroll(Offset){
      return "#" + myRainbow.colorAt(Offset);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setColor(updateColorOnScroll(window.pageYOffset))
      );
      window.addEventListener("load", () =>
        setHeight(document.documentElement.scrollHeight),
        myRainbow.setNumberRange(0, height)
      );
    }
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header" style={{backgroundColor: color}} id="home">
        <img src={Mark} className="App-logo"/>
        <br></br>
        <h1 style={{fontSize: "200%"}}>Mark Branton</h1>
      </header>
      <div class="screen" style={{backgroundColor: color}}>
        <div style={{fontSize: "250%"}}>
          <Container fluid>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="about">
          <br></br>
          <h1>About</h1>
          <br></br>
          <div>
            I am a 4th year computer engineering student at the University of Waterloo who is always looking for new job opportunities.
          </div>
          <div>
            I am mainly looking for web development jobs.
            Please do not hesitate to reach out to me with job opportunities.
          </div>
        </div>
        <br></br>
        <div id="projects">
          <br></br>
          <h1>
            Projects
          </h1>
          <br></br>
          {Projects.map((Project) => {
            return (<div>
              <h2>{Project.Title}</h2>
              <br></br>
              <p>{Project.Description}</p>
              <br></br>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
