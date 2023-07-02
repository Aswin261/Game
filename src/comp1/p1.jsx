import React, { useState } from "react";
import Child1 from "./c1";
function Parent1() {
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFocusChange = (focused) => {
    setIsFocused(focused);
  };

  const handleDisableChange = (disabled) => {
    setIsDisabled(disabled);
  };
  return (
    <div>
      <Child1
        isFocused={isFocused}
        handleFocusChange={handleFocusChange}
        isDisabled={isDisabled}
        handleDisableChange={handleDisableChange}
      />
    </div>
  );
}

export default Parent1;
