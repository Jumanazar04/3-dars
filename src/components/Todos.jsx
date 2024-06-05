import React, { useState, useMemo } from 'react';

const calculatefromNtoBillion = (count) => {
    let n = 0;
    for (let i = 1; i <= 1000000; i++) {
        n += count + i;
    }
    return n;
};

const Todos = () => {
    const [count, setCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const sum = useMemo(() => calculatefromNtoBillion(count), [count]);

    const toggleMessage = () => {
        setShowMessage(prevShowMessage => !prevShowMessage);
    };

    return (
        <div className='flex flex-col gap-4 container mx-auto text-center m-8'>
            <h1 className='text-3xl font-bold'>Task-2</h1>
            <h1>Count: {count}</h1>
            <h2>Sum: {sum}</h2>
            <button className='border w-1/5 mx-auto rounded py-1 px-4 bg-blue-600 text-white' onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            <button className='border w-1/5 mx-auto rounded py-1 px-4 bg-blue-600 text-white' onClick={toggleMessage}>
                Massage
            </button>
            {<p>{showMessage ? "Show massage" : "Hide massage"}</p>}
        </div>
    );
};

export default Todos;
