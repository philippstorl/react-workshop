import React, {useState} from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
            <p>Current {count}</p>
            <button onClick={incrementCount}>increment</button>
            <button onClick={reset}>reset</button>
        </>
    );
}

export default Counter;
