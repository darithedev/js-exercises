import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <> {/* fragment */}
            <p>Counter: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

// Second example
/*export default function Counter () {
    return (
        <div>

        </div>
    )
}*/

export default Counter;
