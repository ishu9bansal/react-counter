import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Counter.css';
import backend from '../services/backend';

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    backend.connect(name).then((prevCount) => setCount(prevCount));

    return () => backend.disconnect(name);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    backend.updateMap(count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
        <div id="name">{name}</div>
        <div id="counter">{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
    </div>
  );
}

export default Counter;
