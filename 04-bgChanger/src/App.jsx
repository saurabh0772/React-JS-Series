import { useState } from 'react'


function App() {
  const [color, setColor] = useState("orange")

  return (
      <div className='w-full h-screen'
      style={{backgroundColor: color}}
      > 

      <div className='fixed flex justify-center flex-wrap bottom-20 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded-2xl px-3 py-2'>
              <button className='bg-red-500 px-3 py-2 outline-none rounded-2xl '
                onClick={() => {setColor("red")}}
              >Red</button>
              <button className='bg-green-500 px-3 py-2 outline-none rounded-2xl'
                onClick={() => {setColor("green")}}
              >Green</button>
              <button className='bg-blue-500 px-3 py-2 outline-none rounded-2xl'
                onClick={() => {setColor("blue")}}
              >Blue</button>
              <button className='bg-black text-white px-3 py-2 outline-none rounded-2xl' onClick={() => {setColor("orange")}}>default</button>
            </div>
      </div>

      </div>

      
    
  )
}

export default App
