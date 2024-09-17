import React, { ReactElement } from "react";
import { Row, Col, Collapse } from "react-bootstrap";
import { BaseImgWithText } from "../Components/BaseImg";

interface ProjectProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
  show?: boolean;
}

export const ProjectGrid = ({
  setOpen,
  open,
  show = true,
}: ProjectProps): ReactElement => {
  return (
    <Collapse in={show}>
      <div className="h-100">
        <Row className="align-items-center w-100" sm={3} xs={3}>
        <Col align="center">
            <BaseImgWithText
              name="diogin"
              title="Diogin"
              src="/diogin.png"
              open={open}
              setOpen={setOpen}
            />
          </Col><Col align="center">
            <BaseImgWithText
              name="perfectfit"
              title="Perfect Fit"
              src="/perfectfit.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="animedle"
              title="Animedle"
              src="/animedle.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="yandex"
              title="Yandex"
              src="/yandex.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="ytlive"
              title="YT Live"
              src="/ytlive.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="website"
              title="Website"
              src="/website.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="buspool"
              title="BusPool"
              src="/map.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col align="center">
            <BaseImgWithText
              name="university"
              title="University"
              src="/university.png"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          {/* <Col align="center">
            <BaseImgWithText
              name="topico"
              title="Topico"
              src="/topico.png"
              open={open}
              setOpen={setOpen}
            />
          </Col> */}
          <Col align="center">
            <BaseImgWithText
              name="poker"
              title="Poker"
              src="/poker.jpeg"
              open={open}
              setOpen={setOpen}
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Collapse>
  );
};
