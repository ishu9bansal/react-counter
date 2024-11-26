import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
        <div id="counter">{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
    </div>
  );
}

export default Counter;
