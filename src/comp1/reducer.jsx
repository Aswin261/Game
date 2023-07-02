import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        class="btn btn-warning m-1"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        class="btn btn-warning m-1"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        class="btn btn-warning m-1 "
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
