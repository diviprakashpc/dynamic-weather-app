import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import getPath from "./utils/getBackground";
// console.log(currentWallPath);

function App() {
  let path = getPath();
  console.log('path', path);
  const customBackground = {
    backgroundImage: `url(${getPath()})`,
    backgroundSize: 'cover',/* <------ */
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  return (
    <>
      <div id="container" style={customBackground}>
      {/* {changeWall} */}
       <Section1/>
        <Section2/>
      </div>
    </>
  );
}
//  const changeWall = ()=>{
//    document.getElementById("container").style.backgroundImage = "url(currentWallPath)";
//  }
export default App;
