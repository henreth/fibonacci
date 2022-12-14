import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';

export default function App() {
  let [input, setInput] = useState(0)

  const numInputRef = useRef<HTMLInputElement>(null);

  function handleInputChange() {
    setInput(Number(numInputRef.current!.value))
  }

  function fib(num: number, memo: { [key: string]: any } = {}): any { 
    if (memo[num] !== undefined) return memo[num]
    if (num <= 2) return 1
    let res = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = res
    return res
}
  const sum = <div className='sum'>{input-1}:<span>{fib(input-1)}</span> + {input-2}:<span>{fib(input-2)}</span></div>
  const sumToDisplay = input > 1 ? sum : ''
      
  return (
    <div className='main-container'>
      <Header/>
      <Input
        input={input}
        handleInputChange={handleInputChange}
        numInputRef={numInputRef}
      />
      {sumToDisplay}
    </div>
  );

}

