import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/face.png";
import emotion1 from "../../Assets/fpga.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Attendance System using DeepFace"
              description="The system uses pre-stored faces for recognition and employs DeepFacefor accurate facial matching. When a face is detected, it's compared with thestored faces using DeepFace. Upon successful recognition, attendance isautomatically updated on the website, and the data is stored in Firebase forfuture reference"
              ghLink="https://github.com/Rosedivi/AttendanceSystem"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion1}
              isBlog={false}
              title=" FPGA Processor Based Hardware implementation 
of Accel Harmonic Force "
              description="The project sought to leverage FPGA-based hardware implementation to intricately model and simulate harmonic forces acting on LEO spacecraft, thereby optimizing computational precision and enhancing the spacecraft's stability and performance during missions."
              ghLink="https://github.com/Rosedivi/AttendanceSystem"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
