import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const count = 15;
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button 
        onClick={addValue}
      >Add count : {count}</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove count : {count}</button>
    </>
  )
}

export default App
