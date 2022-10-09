import React, { ReactElement } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const GolangImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}): ReactElement => {
  return (
    <Image
      src="../../img/golang.png"
      fluid
      style={{
        height: "8rem",
        width: "8rem",
      }}
      onClick={() => {
        if (props.open === "golang") {
          props.setOpen("");
        } else {
          props.setOpen("golang");
        }
      }}
    />
  );
};

export const GolangCard = (props: { open: string }): ReactElement => {
  return (
    <Collapse in={props.open === "golang"}>
      <div>
        <Card className="mx-auto text-center" bg="dark" text="light">
          <Card.Body>
            <Card.Title>Golang</Card.Title>
            <Card.Text className="mx-auto" style={{ width: "40rem" }}>
              <p>
                Golang is one of my favorite languages to work in and the one I
                use for most of most of my recent projects. I first learned it
                back while working at Yandex as part of the codebase was in GO,
                and have since grown to love it. Some of my recent work includes
                BusPool and Poker, as well some simple opensource contributions
                where I added tests and small features.
              </p>
              <p></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
