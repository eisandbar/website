import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";

export const BaseImg = (props: {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
  name: string;
  src: string;
}): ReactElement => {
  return (
    <Image
      src={props.src}
      fluid
      style={{
        height: "8rem",
        width: "8rem",
      }}
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
