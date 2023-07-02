import React, { useState } from "react";
function Text() {
  const [text, setText] = useState("");
  const maxLength = 200;
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        maxLength={maxLength}
      />
      <p>{maxLength - text.length} Characters Left</p>
    </div>
  );
}

export default Text;
