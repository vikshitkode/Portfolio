import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Vikshit Kode </span>
            from <span className="purple"> Seattle, WA.</span>
            <br />
            I am currently a Grad Student at Seattle University.
            <br />
            I have completed my Bachelors in Computer Science (B.Tech) at Amrita School of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Pickle Ball
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "sUccess depends on the second letter!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Vikshit Kode</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
