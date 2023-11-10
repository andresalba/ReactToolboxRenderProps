import React from 'react';
import Counter from './Counter';

const MyComponent = () => {
    return (
        <Counter>
            {
                (count, increment, decrement) => (
                    <div>
                        <h2>Render Props</h2>
                        <p>Value: {count}</p>
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>
                    </div>
                )
            }
        </Counter>
    );
};

export default MyComponent;