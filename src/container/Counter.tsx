import React, {useState} from 'react';

interface CounterProps {
    initialValue?: number
}

const Counter: React.FC<CounterProps> = ({initialValue= 100}) => {
    const [count, setCount] = useState<number>(initialValue);

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
