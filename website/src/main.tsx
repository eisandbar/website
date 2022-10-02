import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { Languages } from "./Pages/Languages";
import { Home } from "./Pages/Home";
// import "./index.css";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lang" element={<Languages />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
