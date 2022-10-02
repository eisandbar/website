import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../Nav";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import { PythonCard, PythonImg } from "../Cards/Python";
import { GolangCard, GolangImg } from "../Cards/Golang";
import { JavascriptCard, JavascriptImg } from "../Cards/Javascript";

export const Languages = () => {
  const [open, setOpen] = useState("");
  return (
    <div className="Languages">
      <NavBar />
      <Row className="align-items-center" style={{ height: "10rem" }}>
        <Col align="center">
          <PythonImg setOpen={setOpen} />
        </Col>
        <Col align="center">
          <GolangImg setOpen={setOpen} />
        </Col>
        <Col align="center">
          <JavascriptImg setOpen={setOpen} />
        </Col>
      </Row>
      <Row className="align-items-center" style={{ height: "20rem" }}>
        <Col>
          <PythonCard open={open} />
        </Col>
        <Col>
          <GolangCard open={open} />
        </Col>
        <Col>
          <JavascriptCard open={open} />
        </Col>
      </Row>

      <img className="bg-img" />
    </div>
  );
};
