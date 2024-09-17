import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Container, Collapse } from "react-bootstrap";
import {
  PythonCard,
  GolangCard,
  JavascriptCard,
  CSharpCard
} from "../Components/Languages";

import { BaseImg } from "../Components/BaseImg";

export const Languages = (): ReactElement => {
  const [open, setOpen] = useState("firstLoad");
  const [show, setShow] = useState(false);
  const [langParam] = useSearchParams();

  useEffect(() => {
    setTimeout(() => setShow(true), 400);

    const lang = langParam.get("lang");
    if (lang != null && open === "firstLoad") {
      setOpen(lang);
    }
  });

  return (
    <div className="Languages h-75">
      <NavBar show={show} />
      <Collapse in={show}>
        <div className="pt-5">
          <Row className="align-items-center" sm={4} xs={4}>
            <Col align="center">
              <BaseImg
                name="python"
                src="/python.png"
                open={open}
                setOpen={setOpen}
              />
            </Col>
            <Col align="center">
              <BaseImg
                name="golang"
                src="/golang.png"
                open={open}
                setOpen={setOpen}
              />
            </Col>
            <Col align="center">
              <BaseImg
                name="javascript"
                src="/javascript.png"
                open={open}
                setOpen={setOpen}
              />
            </Col>
            <Col align="center">
              <BaseImg
                name="csharp"
                src="/csharp.png"
                open={open}
                setOpen={setOpen}
              />
            </Col>
          </Row>
          
        </div>
      </Collapse>

      <Collapse in={show}>
        <div >
          <Container>
            <PythonCard open={open} />
            <GolangCard open={open} />
            <JavascriptCard open={open} />
            <CSharpCard open={open}/>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
