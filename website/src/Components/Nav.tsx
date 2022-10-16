import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Collapse from "react-bootstrap/Collapse";

interface NavProps {
  show?: boolean;
}

export const NavBar = ({ show = true }: NavProps): ReactElement => {
  return (
    <Collapse in={show}>
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Container fluid>
              <Nav
                className="justify-content-center"
                justify
                variant="tabs"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="lang">Languages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="projects">Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Collapse>
  );
};
