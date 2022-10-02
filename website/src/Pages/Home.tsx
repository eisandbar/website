import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../Nav";
import { Container, Row } from "react-bootstrap";
import { HomeCard } from "../Cards/Home";

const lightBlue = { color: "rgb(220,240,250)" };
const paleBlue = { color: "rgb(180,200,200)" };

export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Row className="align-items-center" style={{ height: "20rem" }}>
        <Container>
          <h1 className="display-1 fw-bold text-center">
            <span style={lightBlue}>ANDREY</span>{" "}
            <span style={paleBlue}>EM</span>
          </h1>
          <h1 className="display-6 text-center fw-bold" style={paleBlue}>
            @eisandbar
          </h1>
        </Container>
      </Row>
      <Row>
        <HomeCard />
      </Row>
    </div>
  );
};
