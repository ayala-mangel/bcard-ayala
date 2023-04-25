import React, { CSSProperties } from "react";
import "./styleModule.css";

const StyleTest = () => {
  const purple: CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };
  let isGreen = true;
  isGreen = false;

  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>StyleTest</h1>
      <h2 style={purple}>submit</h2>
      <hr />
      <p className="rem">paragraph</p>
      <span style={{ backgroundColor: isGreen ? "green" : "blue" }}>span</span>
    </div>
  );
};

export default StyleTest;
