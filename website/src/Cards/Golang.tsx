import React from "react";
import { Collapse, Image, Ratio } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const GolangImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/480px-Go_Logo_Blue.svg.png"
      style={{
        height: "5rem",
        width: "8rem",
      }}
      onClick={() => props.setOpen("golang")}
    />
  );
};

export const GolangCard = (props: { open: string }) => {
  return (
    <Collapse in={props.open == "golang"}>
      <div>
        <Card className="mx-auto" bg="dark" text="light">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
