import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import {
  PythonCard,
  GolangCard,
  JavascriptCard,
} from "../Components/Languages";

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
    <div className="Languages h-75">
      <NavBar />
      <Row className="align-items-center h-50 w-100" sm={3} xs={3}>
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
