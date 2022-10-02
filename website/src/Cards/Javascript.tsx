import React from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const JavascriptImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
      style={{
        height: "5rem",
        width: "5rem",
      }}
      onClick={() => props.setOpen("javascript")}
    />
  );
};

export const JavascriptCard = (props: { open: string }) => {
  return (
    <Collapse in={props.open == "javascript"}>
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
