import React, { ReactElement } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const GolangImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}): ReactElement => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/480px-Go_Logo_Blue.svg.png"
      style={{
        height: "8rem",
        width: "12rem",
      }}
      onClick={() => props.setOpen("golang")}
    />
  );
};

export const GolangCard = (props: { open: string }): ReactElement => {
  return (
    <Collapse in={props.open === "golang"}>
      <div>
        <Card className="mx-auto" bg="dark" text="light">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              <p>Stuff and text</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
