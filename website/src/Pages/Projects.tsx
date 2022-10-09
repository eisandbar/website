import React, { ReactElement, useState } from "react";
import { NavBar } from "../Components/Nav";
import { Row, Col } from "react-bootstrap";
import { BusPoolCard, BusPoolImg } from "../Components/BusPool";

export const Projects: React.FC = (): ReactElement => {
  const [open, setOpen] = useState("");
  return (
    <div className="Projects">
      <NavBar />
      <Row className="align-items-center" style={{ height: "10rem" }}>
        <Col align="center">
          <BusPoolImg setOpen={setOpen} />
        </Col>
        <Col align="center"></Col>
        <Col align="center"></Col>
      </Row>
      <Row className="align-items-center" style={{ height: "20rem" }}>
        <Col>
          <BusPoolCard open={open} />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <img className="bg-img" />
    </div>
  );
};
