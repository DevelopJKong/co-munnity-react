import React, { useState } from 'react';

function Cal() {
    const [number, setNumber] = useState(0);

    function plus() {
        setNumber(number + 1);
    }
    function minus() {
        setNumber(number - 1);
    }
    function multiply() {
        setNumber(number * 2);
    }

    return (
        <div>
            <div>값 : {number}</div>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <button onClick={multiply}>*2</button>
        </div>
    );
}

export default Cal;