import React, { ReactElement } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const JavascriptImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}): ReactElement => {
  return (
    <Image
      src="../../img/javascript.png"
      fluid
      style={{
        height: "8rem",
        width: "8rem",
      }}
      onClick={() => {
        if (props.open === "javascript") {
          props.setOpen("");
        } else {
          props.setOpen("javascript");
        }
      }}
    />
  );
};

export const JavascriptCard = (props: { open: string }): ReactElement => {
  return (
    <Collapse in={props.open === "javascript"}>
      <div>
        <Card className="mx-auto text-center" bg="dark" text="light">
          <Card.Body>
            <Card.Title>Javascript</Card.Title>
            <Card.Text className="mx-auto" style={{ width: "40rem" }}>
              <p>
                My first non academic project was in Javascript. It was a
                multi-room chat app called Topico that used express and
                websockets. Since then I have used Javascript when working on
                our service UI at Yandex as well as in my own projects,
                including this website. I use JS mostly with React and since I
                prefer strongly typed languages I use typescript.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
