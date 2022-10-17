import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";

interface ImageProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
  name: string;
  src: string;
  title?: string;
}

export const BaseImg = (props: ImageProps): ReactElement => {
  return (
    <div className="imageBox ratio ratio-1x1">
      <Image
        className="ratio ratio-1x1"
        src={props.src}
        style={{ height: "75%", width: "75%" }}
        onClick={() => {
          if (props.open === props.name) {
            props.setOpen("");
          } else {
            props.setOpen(props.name);
          }
        }}
      />
    </div>
  );
};

export const BaseImgWithText = (props: ImageProps): ReactElement => {
  const image =
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
    props.src +
    ")";

  return (
    <div className="backgroundBox">
      <div
        className="bg-image rounded-4 ratio ratio-1x1 w-75"
        style={{
          backgroundImage: image,
          backgroundSize: "100% 100%",
        }}
        onClick={() => {
          if (props.open === props.name) {
            props.setOpen("");
          } else {
            props.setOpen(props.name);
          }
        }}
      >
        <h4 className="text-light">{props.title}</h4>
      </div>
    </div>
  );
};

interface GitImageProps {
  href?: string;
}

export const GithubImg = (props: GitImageProps): ReactElement => {
  return (
    <a className="noUnderline" href={props.href}>
      <Image src="/github.png" />
    </a>
  );
};
