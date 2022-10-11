import React, { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";
import { BaseImgWithText } from "../Components/BaseImg";

interface ProjectProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}

export const ProjectGrid: React.FC<ProjectProps> = (
  props: ProjectProps
): ReactElement => {
  return (
    <div className="h-100">
      <Row className="align-items-center h-50 w-100" sm={3} xs={3}>
        <Col align="center">
          <BaseImgWithText
            name="buspool"
            title="BusPool"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="poker"
            title="Poker"
            src="../../img/poker.jpeg"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="website"
            title="Website"
            src="../../img/website.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
      </Row>
      <Row className="align-items-center h-50 w-100" sm={3} xs={3}>
        <Col align="center">
          <BaseImgWithText
            name="university"
            title="University"
            src="../../img/university.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="yandex"
            title="Yandex"
            src="../../img/yandex.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="topico"
            title="Topico"
            src="../../img/topico.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
      </Row>
      <Row className="align-items-center  h-50 w-100" sm={3} xs={3}>
        <Col align="center">
          <BaseImgWithText
            name="yandexFront"
            title="Yandex
            Frontend"
            src="../../img/yandex.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};
