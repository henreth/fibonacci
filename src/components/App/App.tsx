import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  let [result, setResult] = useState(0)

  const numInputRef = useRef<HTMLInputElement>(null);

  function handleResultChange() {
    setResult(Number(numInputRef.current!.value))
  }


  function fibonacci(num: number): any {
    if (num <= 2) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

  function fib(num: number, memo = [undefined, 1, 1]): any {
    if (memo[num] !== undefined) return memo[num]
    let res = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = res
    return res
  }


  return (
    <div className='main-container'>
      <input
        type='number'
        min='0'
        step='1'
        value={result ? result : ''}
        placeholder='Enter a Number'
        ref={numInputRef}
        onChange={handleResultChange}
      />
      <div>{fibonacci(result)}</div>
    </div>
  );
}

export default App;
