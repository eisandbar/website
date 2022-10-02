import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const HomeCard = () => {
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
