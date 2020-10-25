import React, { Component, useState } from "react";
import "./styles.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  function buttonClickHandler() {
    setRenderBall(true);
    document.addEventListener("keydown", handleKeyPress);
  }
  const reset = () => {};
  const renderChoice = () => {
    if (renderBall) {
      return <div id="b" className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      );
  };
  function handleKeyPress(event) {
    if (event.keyCode === 39) {
      handleRight();
    } else if (event.keyCode === 40) {
      handleDown();
    } else if (event.keyCode === 38) {
      handleUp();
    } else if (event.keyCode === 37) {
      handleLeft();
    }
  }
  function handleRight() {
    var element = document.getElementById("b");
    element.style.left = parseInt(element.style.left) + 5 + "px";
    console.log(ballPosition);
  }
  function handleLeft() {
    var element = document.getElementById("b");
    element.style.left = parseInt(element.style.left) - 5 + "px";
  }

  function handleUp() {
    var element = document.getElementById("b");
    element.style.top = parseInt(element.style.top) - 5 + "px";
  }

  function handleDown() {
    var element = document.getElementById("b");
    element.style.top = parseInt(element.style.top) + 5 + "px";
  }

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
