import React, { useState, useEffect } from "react";

function Style() {
  const [val, setVal] = useState(0);
  const update = () => {
    document.title = `you clicked ${val} times`;
  };
  useEffect(() => {
    update();
  }, [val]);
  const handleClick = () => {
    setVal(val + 1);
    const popups = document.getElementById("popup");
    const contents = document.getElementById("content");
    if (val >= 10) {
      popups.style.color = "red";
      contents.style.visibility = "visible";
    } else {
      popups.style.color = "blue";
      contents.style.visibility = "hidden";
    }
  };

  return (
    <div className="main">
      <h1 id="popup">This is a popup!</h1>
      <h5 id="content">Visible content</h5>
      <button
        className="close_button"
        onClick={() => {
          handleClick();
        }}
      >
        Click
      </button>
      <p>clicked {val} times</p>
    </div>
  );
}

export default Style;
