import React, { ReactElement } from "react";
import { NavBar } from "../Components/Nav";
import Row from "react-bootstrap/Row";
import { HomeCard, HomeTitle } from "../Components/Home";
export const Home: React.FC = (): ReactElement => {
  return (
    <div className="Home">
      <NavBar />
      <Row className="align-items-center" style={{ height: "20rem" }}>
        <HomeTitle />
      </Row>
      <Row>
        <HomeCard />
      </Row>
    </div>
  );
};
