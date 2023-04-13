"use client";

import { useState } from "react";

export default function page({ data }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    value: 0,
    result: 0,
  });
  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={state.value}
        onChange={(e) => setState({ ...state, value: Number(e.target.value) })}
      />
      <button onClick={() => setState({ ...state, result: state.value })}>
        Calculate
      </button>
      <div>Result: {state.result}</div>
    </div>
  );
}
