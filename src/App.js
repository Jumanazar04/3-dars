import React, { useState, useCallback } from 'react';
import Counter from './components/Counter';

function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [count, setCount] = useState(0);

  const toggleMessage = () => {
    setShowMessage(prevShowMessage => !prevShowMessage);
  };

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-5 '>
      <button className='border rounded bg-blue-600 text-white py-1 px-3' onClick={toggleMessage}>
        {showMessage ? 'Hide message' : 'Show message'}
      </button>
      {showMessage && <p>Message</p>}
      <Counter count={count} increment={increment} />
    </div>
  );
}

export default App;
