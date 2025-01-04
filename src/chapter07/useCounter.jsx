import React, {useState} from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const handleIncreaseCount = () => setCount((count) => count + 1);
    const handleDecreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, handleIncreaseCount, handleDecreaseCount];
}

export default useCounter;