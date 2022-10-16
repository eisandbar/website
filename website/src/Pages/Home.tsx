import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import Row from "react-bootstrap/Row";
import { HomeCard, HomeTitle } from "../Components/Home";

export const Home = (): ReactElement => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [height, setHeight] = useState("100%");

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
    setTimeout(() => {
      setHeight("20rem");
      setShow2(true);
    }, 1500);
  });

  return (
    <div className="Home h-100" hidden={!show}>
      <NavBar show={show2} />
      <Row className="align-items-center intro" style={{ height }}>
        <HomeTitle show={show} />
      </Row>
      <Row>
        <HomeCard show={show2} />
      </Row>
    </div>
  );
};
