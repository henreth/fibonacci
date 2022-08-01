import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';
import './App.css';

export default function App() {
  let [input, setInput] = useState(0)

  const numInputRef = useRef<HTMLInputElement>(null);

  function handleInputChange() {
    setInput(Number(numInputRef.current!.value))
  }
  
  return (
    <div className='main-container'>
      <Header/>
      <Input
        input={input}
        handleInputChange={handleInputChange}
        numInputRef={numInputRef}
      />
    </div>
  );

}

