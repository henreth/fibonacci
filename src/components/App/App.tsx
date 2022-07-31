import React, { useState, useRef} from 'react';
import './App.css';

function App() {
  let [result,setResult] = useState(0)
  
  const numInputRef = useRef<HTMLInputElement>(null);

  function handleResultChange(){
    setResult(Number(numInputRef.current!.value))
  }


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
      ref={numInputRef}
      onChange={handleResultChange}
    />
    <div>{fibonacci(6)}</div>
    <div>{result}</div>
    </>
  );
}

export default App;
