import React, { useState, useRef } from 'react';
import Input from '../Input/Input';
import './App.css';

function App() {
  let [input, setInput] = useState(0)

  const numInputRef = useRef<HTMLInputElement>(null);

  function handleInputChange() {
    setInput(Number(numInputRef.current!.value))
  }


  return (
    <div className='main-container'>
    <div className='title'>The Fibonacci Sequence</div>
    <Input
      input={input}
      handleInputChange={handleInputChange}
      numInputRef={numInputRef}
    />
    </div>
  );

}

export default App;
