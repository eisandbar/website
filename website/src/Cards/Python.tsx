import React, { ReactElement } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const PythonImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}): ReactElement => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/240px-Python-logo-notext.svg.png"
      style={{
        height: "8rem",
        width: "8rem",
      }}
      onClick={() => props.setOpen("python")}
    />
  );
};

export const PythonCard = (props: { open: string }): ReactElement => {
  return (
    <Collapse in={props.open === "python"}>
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
