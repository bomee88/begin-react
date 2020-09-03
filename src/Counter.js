import React, { useState } from 'react';

function Counter(){
   const [number, setNumber] = useState(0); //우리가 number라는 상태를 만들건데 이 상태의 기본값은 0으로 하겠다. setNumber은 이 상태를 바꿔주겠다. 배열구조분해를 사용한 상태.
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;