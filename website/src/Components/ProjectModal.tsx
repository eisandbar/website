import React, { ReactElement } from "react";
import { Modal } from "react-bootstrap";

interface ProjectProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}

export const ProjectModal: React.FC<ProjectProps> = (
  props: ProjectProps
): ReactElement => {
  const handleClose = (): void => props.setOpen("");
  return (
    <div>
      <Modal
        show={props.open === "buspool"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "poker"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "website"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "university"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "yandex"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "topico"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
      <Modal
        show={props.open === "yandexFront"}
        onHide={handleClose}
        dialogClassName="modal-custom"
      >
        <div className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>{props.open}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </div>
      </Modal>
    </div>
  );
};
