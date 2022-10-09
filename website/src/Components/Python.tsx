import React, { ReactElement } from "react";
import { Collapse, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const PythonImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}): ReactElement => {
  return (
    <Image
      src="../../img/python.png"
      fluid
      style={{
        height: "8rem",
        width: "8rem",
      }}
      onClick={() => {
        if (props.open === "python") {
          props.setOpen("");
        } else {
          props.setOpen("python");
        }
      }}
    />
  );
};

export const PythonCard = (props: { open: string }): ReactElement => {
  return (
    <Collapse in={props.open === "python"}>
      <div>
        <Card className="mx-auto text-center" bg="dark" text="light">
          <Card.Body>
            <Card.Title>Python</Card.Title>
            <Card.Text className="mx-auto" style={{ width: "40rem" }}>
              <p>
                Python is the language I have the most experience in. Initially
                I used it for data analysis, machine learning and neuron
                simulation while pursuing a masters in computational
                neuroscience. After leaving academics I used Python while
                working as a backend developer at Yandex in a team that did
                service discovery.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  );
};
