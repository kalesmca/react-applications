import "./index.css";
import React from "react";
import CButton from "./components/CButton";
import FButton from "./components/FButton";
import Greeting from "./components/Greetings";
import Counter from "./components/Counter";
import Home from "./components/Home";

function App() {
  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleReset = () => {
    console.log("reset");
  };

  const handleExit = () => {
    console.log("exited");
  };

  return (
    <div className="container">
      <br />
      <h4> Welcome to Full Stack</h4>
      <hr />

      <div>
        <FButton
          textName="Submit"
          bgColor="green"
          receiveBtnClick={handleSubmit}
        />{" "}
        &nbsp;
        <FButton
          textName="Reset"
          bgColor="orange"
          receiveBtnClick={handleReset}
        />{" "}
        &nbsp;
        <FButton
          textName="Exit"
          bgColor="red"
          receiveBtnClick={handleExit}
        />{" "}
        &nbsp;
        <FButton />
      </div>

      {/* <div>
        <Counter />
        <Greeting />
      </div> */}
      <Home />
    </div>
  );
}
export default App;
