import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const lightBlue = { color: "rgb(220,240,250)" };
const paleBlue = { color: "rgb(180,200,200)" };

export const HomeTitle: React.FC = (): ReactElement => {
  return (
    <Container>
      <h1
        className="display-1 fw-bold text-center"
        style={{ WebkitTextStroke: "4px" }}
      >
        <span style={lightBlue}>ANDREY</span> <span style={paleBlue}>EM</span>
      </h1>
      <a href="https://github.com/eisandbar" style={{ textDecoration: "none" }}>
        <h1 className="display-6 text-center fw-bold" style={paleBlue}>
          @eisandbar
        </h1>
      </a>
    </Container>
  );
};

export const HomeCard: React.FC = (): ReactElement => {
  return (
    <Container>
      <Card className="mx-auto w-75 text-center fs-4" bg="dark" text="light">
        <Card.Body>
          <Card.Title className="fs-3">About Me</Card.Title>
          <Card.Text>
            <p>
              <span>I&#39;m a software developer who uses </span>
              <a href="/lang?lang=python" className="noUnderline">
                Python
              </a>
              <span>, </span>
              <a href="/lang?lang=golang" className="noUnderline">
                Golang
              </a>
              <span>, and </span>
              <a href="/lang?lang=javascript" className="noUnderline">
                Javascript
              </a>
              <span>.</span>
            </p>
            <p>
              <span>Some of my most recent projects include </span>
              <a href="/projects?project=buspool" className="noUnderline">
                BusPool
              </a>
              <span>, </span>
              <a href="/projects?project=poker" className="noUnderline">
                Poker
              </a>
              <span>, and this </span>
              <a href="/projects?project=website" className="noUnderline">
                website
              </a>
            </p>
            <p>
              <span>Check out my </span>
              <a href="https://github.com/eisandbar" className="noUnderline">
                Github
              </a>
              <span> or contact me via </span>
              <a href="mailto:eisandbar@gmail.com" className="noUnderline">
                email
              </a>
              <span>!</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
