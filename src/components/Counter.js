import React from "react";
import { useReducer } from "react";
import "./Counter.css";

const reducer = (state, action) => {
  if (action.type === "DECREMENT" && state > 0) return state - 1;
  if (action.type === "INCREMENT") return state + 1;
  return state;
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
    </div>
  );
}
