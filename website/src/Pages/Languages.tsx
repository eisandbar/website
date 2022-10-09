import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { PythonCard } from "../Components/Python";
import { GolangCard } from "../Components/Golang";
import { JavascriptCard } from "../Components/Javascript";

import { BaseImg } from "../Components/BaseImg";

export const Languages: React.FC = (): ReactElement => {
  const [open, setOpen] = useState("");
  //   const [lang, setLang] = useState("");
  const [langParam] = useSearchParams();

  useEffect(() => {
    const lang = langParam.get("lang");
    if (lang != null && open === "") {
      setOpen(lang);
    }
  });

  return (
    <div className="Languages">
      <NavBar />
      <Row
        className="align-items-center"
        sm={3}
        xs={3}
        style={{ height: "10rem" }}
      >
        <Col align="center">
          <BaseImg
            name="python"
            src="../../img/python.png"
            open={open}
            setOpen={setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImg
            name="golang"
            src="../../img/golang.png"
            open={open}
            setOpen={setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImg
            name="javascript"
            src="../../img/javascript.png"
            open={open}
            setOpen={setOpen}
          />
        </Col>
      </Row>
      <Container>
        <PythonCard open={open} />
        <GolangCard open={open} />
        <JavascriptCard open={open} />
      </Container>
      <img className="bg-img" />
    </div>
  );
};
