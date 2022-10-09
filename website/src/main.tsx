import React, { ReactElement } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { Languages } from "./Pages/Languages";
import { Home } from "./Pages/Home";
import { BackGround } from "./Components/Background";
// import "./index.css";

const Routing: React.FC = (): ReactElement => {
  return (
    <BackGround>
      <Router>
        <Routes>
          <Route path="/lang" element={<Languages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </BackGround>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
