import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  let [result, setResult] = useState(0)

  // let [ending,setEnding] = useState('th')
  let ending = 'th'

  const numInputRef = useRef<HTMLInputElement>(null);

  function handleResultChange() {
    setResult(Number(numInputRef.current!.value))
  }


  function fibonacci(num: number): any {
    if (num <= 2) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

  function fib(num:number, memo :{ [key:string]: any} = {}): any { // solve answer once and store in memo
    if (memo[num] !== undefined) return memo[num]
    if (num <= 2) return 1
    let res = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = res
    return res
}
  console.log(typeof(fib(6)))

  let stringInput = result.toString().split('')
  let lastDigit = Number(stringInput[stringInput.length-1])
  
  switch(lastDigit){
    case 3:
      ending = 'rd'
      break
    case 2:
      ending = 'nd'
      break
    case 1:
      ending = 'st'
      break
    default:
      ending = 'th'
      break
  }

  return (
    <div className='main-container'>
      <input
        className='num-input'
        type='number'
        min='0'
        max='99'
        step='1'
        value={result ? result : ''}
        placeholder='0'
        ref={numInputRef}
        onChange={handleResultChange}
      />
      <div className='input-ending'>{ending}</div>
      <div>:</div>
      <div>{fib(result)}</div>
    </div>
  );
}

export default App;
