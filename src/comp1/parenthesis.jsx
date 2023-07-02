import React, { useState } from "react";

function Parenthesis() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const validateParentheses = () => {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (stack.length === 0) {
          setIsValid(false);
          return;
        } else {
          const lastOpen = stack.pop();
          if (
            (char === ")" && lastOpen !== "(") ||
            (char === "}" && lastOpen !== "{") ||
            (char === "]" && lastOpen !== "[")
          ) {
            setIsValid(false);
            return;
          }
        }
      }
    }
    setIsValid(stack.length === 0);
    setShowResult(true);
  };

  return (
    <div>
      <label>
        Input:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button onClick={validateParentheses} class="m-2 btn btn-info p-1">
        Validate
      </button>
      {showResult && (
        <p>{isValid ? "Valid and matches" : "Invalid and no match"}</p>
      )}
    </div>
  );
}

export default Parenthesis;
