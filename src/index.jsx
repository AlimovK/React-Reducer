import React, { useReducer } from "react";
import { Reducer } from "./reducer";

export const Index = () => {
  const [state, dispatch] = useReducer(Reducer, { counter: 0, name: "" });
  return (
    <div>
      <h1>{state.counter}</h1>
      <h1>{state.name}</h1>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
    </div>
  );
};
