import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves creating modern, responsive, and
              user-friendly web applications. I enjoy turning ideas into clean,
              interactive designs that work smoothly across all devices. Over
              time, I’ve worked with various technologies and found my passion
              in building beautiful and high-performance interfaces that offer a
              great user experience.
              <br />
              <br />
              I’m skilled in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js and Next.js{" "}
                </b>
              </i>
              — and I enjoy bringing ideas to life through clean, efficient, and
              user-friendly design.
              <br />
              <br />
              I’m always excited to learn new technologies and improve my skills
              to create engaging, efficient, and visually appealing frontend
              experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
