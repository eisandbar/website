import React, { useState } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const PythonImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/240px-Python-logo-notext.svg.png"
      style={{
        height: "5rem",
        width: "5rem",
      }}
      onClick={() => props.setOpen("python")}
    />
  );
};

export const PythonCard = (props: { open: string }) => {
  return (
    <Collapse in={props.open == "python"}>
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
