import React from 'react';
import './App.css';

function App() {

  function fibonacci(num: number): any{
    if (num <= 2) return 1
    return fibonacci(num-1) + fibonacci(num-2)
  }

  return (
    <div>{fibonacci(6)}</div>
  );
}

export default App;
