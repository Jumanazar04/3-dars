import React, { memo } from 'react';

const Counter = memo(({ count, increment }) => {
  console.log('Counter component re-rendered');
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
});

export default Counter;
