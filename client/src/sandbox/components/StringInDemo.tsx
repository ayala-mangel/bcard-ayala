import React from "react";

const StringInDemo = () => {
  let bool = true;
  bool = false;
  return <>{bool ? "yes" : "no"}</>;
};

export default StringInDemo;
