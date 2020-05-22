import React, { useState } from "react";

function BoxColor() {
  const COLOR_LIST = ["green", "black", "pink", "yellow", "blue"];

  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color");
    return initColor;
  });

  function getRandomColor() {
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  }

  function handleBoxColor() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ background: color }}
      onClick={handleBoxColor}
    >
      <span>Background: {color}</span>
    </div>
  );
}

export default BoxColor;
