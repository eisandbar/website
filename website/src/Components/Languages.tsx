import React, { ReactElement } from "react";
import { Collapse } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface CardProps {
  open: string;
  name: string;
  title?: string;
  children?: React.ReactNode;
}

const BaseCard = (props: CardProps): ReactElement => {
  return (
    <Collapse in={props.open === props.name}>
      <div>
        <Card className="mx-auto text-center" bg="dark" text="light">
          <Card.Body>
            <Card.Title as="h2">{props.title}</Card.Title>
            <Card.Text className="mx-auto w-75 fs-4">
              {props.children}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};

export const GolangCard = (props: { open: string }): ReactElement => {
  return (
    <BaseCard title="Golang" name="golang" {...props}>
      <p>
        <span>
          Golang is one of my favorite languages to work in and the one I use
          for most of most of my recent projects. I first learned it back while
          working at Yandex as part of the codebase was in GO, and have since
          grown to love it. Some of my recent work includes{" "}
        </span>
        <a className="noUnderline" href="/projects?project=buspool">
          BusPool
        </a>
        <span> and </span>
        <a className="noUnderline" href="/projects?project=poker">
          Poker
        </a>
        <span>
          , as well as simple opensource contributions where I added tests and
          small features.
        </span>
      </p>
    </BaseCard>
  );
};

export const JavascriptCard = (props: { open: string }): ReactElement => {
  return (
    <BaseCard title="Javascript" name="javascript" {...props}>
      <p>
        My first non academic project was in Javascript. It was a multi-room
        chat app called{" "}
        <a className="noUnderline" href="/projects?project=topico">
          Topico
        </a>{" "}
        that used express and websockets. Since then I have used Javascript when
        working on our service UI at{" "}
        <a className="noUnderline" href="/projects?project=yandexFront">
          Yandex
        </a>{" "}
        as well as in my own projects, including this{" "}
        <a className="noUnderline" href="/projects?project=website">
          website
        </a>
        . I use JS mostly with React and since I prefer strongly typed languages
        I use typescript.
      </p>
    </BaseCard>
  );
};

export const PythonCard = (props: { open: string }): ReactElement => {
  return (
    <BaseCard title="Python" name="python" {...props}>
      <p>
        <span>
          Python is the language I have the most experience in. Initially I used
          it in{" "}
        </span>
        <a className="noUnderline" href="/projects?project=university">
          university
        </a>
        <span>
          {" "}
          for data analysis, machine learning and neuron simulation while
          pursuing a masters in computational neuroscience. After leaving
          academics I used Python while working as a backend developer at{" "}
        </span>
        <a className="noUnderline" href="/projects?project=yandex">
          Yandex
        </a>
        <span> in a team that did service discovery.</span>
      </p>
    </BaseCard>
  );
};
