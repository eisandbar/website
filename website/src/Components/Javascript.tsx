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
            <Card.Title className="fs-2">Javascript</Card.Title>
            <Card.Text className="mx-auto w-75 fs-4">
              <p>
                My first non academic project was in Javascript. It was a
                multi-room chat app called{" "}
                <a className="noUnderline" href="/projects?project=topico">
                  Topico
                </a>{" "}
                that used express and websockets. Since then I have used
                Javascript when working on our service UI at{" "}
                <a className="noUnderline" href="/projects?project=yandexFront">
                  Yandex
                </a>{" "}
                as well as in my own projects, including this{" "}
                <a className="noUnderline" href="/projects?project=website">
                  website
                </a>
                . I use JS mostly with React and since I prefer strongly typed
                languages I use typescript.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
