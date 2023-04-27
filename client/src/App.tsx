import React from "react";
import "./App.css";
import Template from "./sandbox/components/Template";
import Test from "./sandbox/components/Test";
import StringInDemo from "./sandbox/components/StringInDemo";
import Styles from "./sandbox/components/styles/Styles";
import StyleModule from "./sandbox/components/styles/StyleModule";
import StyleTest from "./sandbox/components/styles/StyleTest";
import CardBody from "./cards/components/card/CardBody";
import Card from "./cards/components/card/Card";
// import Babel from "./sandbox/Babel";

function App() {
  return (
    <div className="App">
      {/* <Babel /> */}
      {/* <Template /> */}
      {/* <Test /> */}
      {/* <StringInDemo /> */}
      {/* <StyleTest /> */}
      {/* <CardBody /> */}
      <Card />
    </div>
  );
}

export default App;
