import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    return (
        <div>
            <div id="counter" style={{ fontSize: '2em', margin: '20px' }}>{count}</div>
            <button onClick={increment} style={{ padding: '10px 20px', margin: '5px' }}>Increment</button>
            <button onClick={reset} style={{ padding: '10px 20px', margin: '5px' }}>Reset</button>
            <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
        </div>
    );
}

export default Counter;
