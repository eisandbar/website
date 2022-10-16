import React, { ReactElement, useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { NavBar } from "../Components/Nav";
import { ProjectGrid } from "../Components/ProjectGrid";
import { ProjectModal } from "../Components/ProjectModal";

export const Projects = (): ReactElement => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("firstLoad");
  const [projectParam] = useSearchParams();

  useEffect(() => {
    setTimeout(() => setShow(true), 400);

    const project = projectParam.get("project");
    if (project != null && open === "firstLoad") {
      setOpen(project);
    }
  });

  return (
    <div className="Projects h-75">
      <NavBar show={show} />
      <ProjectGrid open={open} setOpen={setOpen} show={show} />
      <ProjectModal open={open} setOpen={setOpen} />
      <img className="bg-img" />
    </div>
  );
};
