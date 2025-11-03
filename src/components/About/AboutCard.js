import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rawan Sadek</span>{" "}
            from <span className="purple">Cairo, Egypt</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Ejada Systems Company</span>.
            <br />I hold a Bachelor’s degree in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Ain Shams University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Piano 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 👩🏻‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Handcrafts 🎨
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
