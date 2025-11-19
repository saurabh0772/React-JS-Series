import { useState } from 'react'
import './contexts/index'
import { TodoProvider } from './contexts/index'

function App() {
  
  // const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className='w-full h-screen bg-black'>
        <div className='flex flex-col w-100 mx-auto pt-20 pb-20 border border-white'>
          <div className='flex '>
            <form className='mx-auto border border-green-500'>
                <input type="text" placeholder='Enter Task' className='bg-white outline-none rounded-l-lg p-2 w-87 border border-red-400'/>
                <button onSubmit={addTask} className='bg-blue-400 p-2 rounded-r-lg cursor-pointer text-white'>Add</button>
            </form>
          </div>

        <div className='flex justify-center border border-white'>
            <div className='text-white'>
              <input type="text" className='bg-white'/>
              <button>Edit</button>
              <button>Delete</button>
            </div>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
