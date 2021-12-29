import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";


function App() {
  return (
    <>
      <div id="container">
       <Section1/>
        <Section2/>
      </div>
    </>
  );
}

export default App;
