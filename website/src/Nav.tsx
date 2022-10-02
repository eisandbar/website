import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    // <Container>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
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
              {/* <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">BusPool</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Poker Odds
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Network</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Website</NavDropdown.Item>
              </NavDropdown> */}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
    // </Container>
  );
};
