import { useState } from 'react'
import './App.css'
import config from './conf/conf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-black text-white p-4 rounded-md'>appWriteUrl : {config.appWriteUrl}</h1>
    </>
  )
}

export default App
