import React from "react";
function Child(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me!</button>
      <p>{props.count}</p>
    </div>
  );
}

export default Child;
