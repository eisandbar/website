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
            <p>Stuff and text</p>
            <p>Stuff and text</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
