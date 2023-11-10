import React, { useState } from 'react';

const Counter = ({ children }) => {
    const [ count, setCount ] = useState(0);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            {children(count, increment, decrement)}
        </div>
    );
};

export default Counter;