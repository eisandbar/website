import React, { ReactElement } from "react";
import { Modal } from "react-bootstrap";

interface ProjectProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}

interface ModalProps extends ProjectProps {
  name: string;
  title?: string;
  children?: React.ReactNode;
}

const ModalBase = (props: ModalProps): ReactElement => {
  const handleClose = (): void => props.setOpen("");
  return (
    <Modal
      show={props.open === props.name}
      onHide={handleClose}
      dialogClassName="modal-custom"
    >
      <div className="modal-custom bg-dark text-light text-center fs-4">
        <Modal.Header closeButton>
          <Modal.Title className="w-100" as="h2">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </div>
    </Modal>
  );
};

export const ProjectModal = (props: ProjectProps): ReactElement => {
  return (
    <div>
      <ModalBase name="buspool" title="BusPool" {...props}>
        <div>Text</div>
      </ModalBase>
    </div>
  );
};
