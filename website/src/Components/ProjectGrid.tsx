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
    <div>
      <Row className="align-items-center" style={{ height: "15rem" }}>
        <Col align="center">
          <BaseImgWithText
            name="buspool"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="poker"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="website"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
      </Row>
      <Row className="align-items-center" style={{ height: "15rem" }}>
        <Col align="center">
          <BaseImgWithText
            name="university"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="yandex"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center">
          <BaseImgWithText
            name="topico"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
      </Row>
      <Row className="align-items-center" style={{ height: "15rem" }}>
        <Col align="center">
          <BaseImgWithText
            name="yandexFront"
            src="../../img/map.png"
            open={props.open}
            setOpen={props.setOpen}
          />
        </Col>
        <Col align="center"></Col>
        <Col align="center"></Col>
      </Row>
    </div>
  );
};
