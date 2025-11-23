import { useEffect, useState } from 'react'
import './App.css'
import InputTodo from './components/InputTodo'
import TodoTask from './components/TodoTask'

function App() {
  const [todos, setTodos] = useState([])
  

  useEffect(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos !== null) setTodos(JSON.parse(savedTodos));
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  
  

  return (
    <>
      <div className='bg-black w-full h-screen text-white pt-10'>
        <div className='border border-white mx-auto flex flex-col w-fit px-3 py-2 rounded-md gap-3'>
          <div className='flex justify-center mt-2 mb-7'>
            <h1 className='text-3xl font-bold'>ToDo List</h1>
          </div>

          {/* input field  */}
          <InputTodo todos={todos} setTodos={setTodos}/>

          

          <ul className='flex gap-3 flex-col'>
            {/* task field  */}

            {
              todos.map((val) => (
                <li key={val.id} className='decoration-none'><TodoTask todos={todos} setTodos={setTodos} todo={val}/></li>
              ))
            }
                          
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
