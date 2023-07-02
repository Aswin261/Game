import React, { useRef, useEffect } from "react";
function Child1({
  isFocused,
  handleFocusChange,
  isDisabled,
  handleDisableChange,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleFocus = () => {
    handleFocusChange(true);
  };

  const handleBlur = () => {
    handleFocusChange(false);
  };

  const handleDisable = (event) => {
    handleDisableChange(event.target.checked);
  };

  return (
    <div>
      <input
        id="text"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isDisabled}
      />
      <label>
        Disable textbox
        <input type="checkbox" checked={isDisabled} onChange={handleDisable} />
      </label>
    </div>
  );
}
export default Child1;
