import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";

interface ImageProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
  name: string;
  src: string;
}

export const BaseImg: React.FC<ImageProps> = (
  props: ImageProps
): ReactElement => {
  return (
    <Image
      src={props.src}
      fluid
      className="imageBox"
      onClick={() => {
        if (props.open === props.name) {
          props.setOpen("");
        } else {
          props.setOpen(props.name);
        }
      }}
    />
  );
};

export const BaseImgWithText: React.FC<ImageProps> = (
  props: ImageProps
): ReactElement => {
  const image =
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
    props.src +
    ")";

  return (
    <div
      className="bg-image imageBox rounded-4"
      style={{
        backgroundImage: image,
      }}
      onClick={() => {
        if (props.open === props.name) {
          props.setOpen("");
        } else {
          props.setOpen(props.name);
        }
      }}
    >
      <h4 className="text-light">{props.name}</h4>
    </div>
  );
};
