import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roja Sri V </span>
            from <span className="purple"> Vellore,TamilNadu, India.</span>
            <br />
            <br />
            Currently pursuing a B.Tech in Artificial Intelligence and Data
            Science at Erode Sengunthar Engineering College, Erode.
            <br />
            <br />
            Completed an internship at ISRO on the project "FPGA Processor-Based
            Hardware Implementation of Acceleration Harmonic Force on LEO
            Spacecraft."
            <br />
            <br />
            Completed a Diploma in Electrical and Electronics Engineering (EEE)
            at Rajagopal Polytechnic College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing Artist
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Vlogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Effective Communication
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}> 
            "Too glam to give a damn....!"{" "}
          </p>
          <footer className="blockquote-footer">Roja Sri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
