import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const HomeCard: React.FC = (): ReactElement => {
  return (
    <Container>
      <Card
        className="mx-auto"
        bg="dark"
        text="light"
        style={{ width: "48rem" }}
      >
        <Card.Body>
          <Card.Title>About Me</Card.Title>
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
