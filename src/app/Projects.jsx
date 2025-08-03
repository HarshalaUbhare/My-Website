import React from "react";
import ChromaGrid from "./ChromaGrid";

const Projects = () => {
  return (
    <div style={{ position: "relative" }}>
      <ChromaGrid radius={200} damping={0.45} fadeOut={0.6} ease="power3.out" />
    </div>
  );
};

export default Projects;
