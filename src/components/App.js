import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
    setRenderBall(false);
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    const arrowKeyHandler = (event) => {
      const key = event.keyCode;
      let curX = x;
      let curY = y;
      if (key === 39) {
        curX += 5;
        setX(curX);
      } else if (key === 37) {
        curX -= 5;
        setX(curX);
      } else if (key === 38) {
        curY -= 5;
        setY(curY);
      } else if (key === 40) {
        curY += 5;
        setY(curY);
      }
      setBallPosition({ left: curX + "px", top: curY + "px" });
    };
    document.addEventListener("keydown", arrowKeyHandler);
    return () => {
      document.removeEventListener("keydown", arrowKeyHandler);
    };
  }, [x, y]);

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={buttonClickHandler} className="start">
          Start
        </button>
      );
  };

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
