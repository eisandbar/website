import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

interface HomeProps {
  show?: boolean;
}

const lightBlue = { color: "rgb(220,240,250)" };
const paleBlue = { color: "rgb(180,200,200)" };

export const HomeTitle = ({ show = true }: HomeProps): ReactElement => {
  return (
    <Collapse in={show}>
      <div>
        <Container>
          <h1
            className="display-1 fw-bold text-center"
            style={{ WebkitTextStroke: "4px" }}
          >
            <span style={lightBlue}>ANDREY</span>{" "}
            <span style={paleBlue}>EM</span>
          </h1>
          <a
            href="https://github.com/eisandbar"
            style={{ textDecoration: "none" }}
          >
            <h1 className="display-6 text-center fw-bold" style={paleBlue}>
              @eisandbar
            </h1>
          </a>
        </Container>
      </div>
    </Collapse>
  );
};

export const HomeCard = ({ show = true }: HomeProps): ReactElement => {
  return (
    <Collapse in={show}>
      <div>
        <Container>
          <Card
            className="mx-auto w-75 text-center fs-4"
            bg="dark"
            text="light"
          >
            <Card.Body>
              <Card.Title as="h2">About Me</Card.Title>
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
                  <span>, </span>
                  <a href="/lang?lang=csharp" className="noUnderline">
                    C#
                  </a>
                  <span>, and </span>
                  <a href="/lang?lang=javascript" className="noUnderline">
                    Javascript
                  </a>
                  <span>.</span>
                </p>
                <p>
                  <span>Some of my most recent projects include </span>
                  <a
                    href="https://ytlive.eisandbar.xyz"
                    className="noUnderline"
                  >
                    YT Live
                  </a>
                  <span>, </span>
                  <a href="/projects?project=diogin" className="noUnderline">
                    Diogin
                  </a>
                  <span>, and </span>
                  <a
                    href="https://animedle.eisandbar.xyz"
                    className="noUnderline"
                  >
                    Animedle
                  </a>
                  <span>.</span>
                </p>
                <p>
                  <span>Check out my </span>
                  <a
                    href="https://github.com/eisandbar"
                    className="noUnderline"
                  >
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
      </div>
    </Collapse>
  );
};
