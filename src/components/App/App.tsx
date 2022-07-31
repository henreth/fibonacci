import React, { useState } from 'react';
import './App.css';

function App() {
  let [result,setResult] = useState(0)

  function fibonacci(num: number): any{
    if (num <= 2) return 1
    return fibonacci(num-1) + fibonacci(num-2)
  }

  return (
    <>
    <input 
      type='number'
      min='0'
      step='1'
      value={result ? result : ''}
      placeholder='Enter a Number'
    />
    <div>{fibonacci(6)}</div>
    </>
  );
}

export default App;
