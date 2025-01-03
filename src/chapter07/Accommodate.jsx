import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // useEffect() : 업데이트마다 실행
    useEffect(() =>{
        console.log("=========");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // useEffect(...,[value]) : value 값이 변경될 때마다 실행
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current cout value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} >퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;