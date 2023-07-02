import React, { useState } from "react";
import Child from "./child";

function Parent() {
  const [count, setCount] = useState(0);
  const handleChildClick = () => {
    setCount(count + 1);
    console.log("Child clicked");
  };
  return (
    <div>
      <Child count={count} handleClick={handleChildClick} />
    </div>
  );
}

export default Parent;
