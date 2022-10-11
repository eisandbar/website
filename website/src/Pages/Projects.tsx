import React, { ReactElement, useState } from "react";
import { NavBar } from "../Components/Nav";
import { ProjectGrid } from "../Components/ProjectGrid";
import { ProjectModal } from "../Components/ProjectModal";

export const Projects: React.FC = (): ReactElement => {
  const [open, setOpen] = useState("");

  return (
    <div className="Projects h-75">
      <NavBar />
      <ProjectGrid open={open} setOpen={setOpen} />
      <ProjectModal open={open} setOpen={setOpen} />
      <img className="bg-img" />
    </div>
  );
};
