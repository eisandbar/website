import React, { ReactElement } from "react";

interface BackGroundProps {
  children: React.ReactNode;
}

export const BackGround = (props: BackGroundProps): ReactElement => {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: "url(../img/backgroundSky.jpg)",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        overflow: "auto",
      }}
    >
      {props.children}
    </div>
  );
};
