import { useState, useEffect } from "react";
import React  from 'react'

function InputTodo({todos, setTodos}) {

    const [todo, setTodo] = useState('');

    


    const addTodo = () => {
        // console.log("")
        const obj = {
            text:todo,
            id:Date.now(),
            isCompleted:false
        }

        setTodos([obj, ...todos])
        setTodo('')
    }

   

  return (
    <>
        <div>
            <input type="text" placeholder='Enter todo' value={todo} onChange={(e) => {setTodo(e.target.value)}}
                onKeyDown={(e) => {
                    if(e.key == 'Enter') addTodo();
                }}
                className='bg-gray-900 px-2 py-2 rounded-l-md outline-none w-100'
            />
            <button onClick={addTodo}
            className='bg-green-700 px-2 py-2 rounded-r-md cursor-pointer'
            >Add</button>
            
        </div>
    </>
  )
}

export default InputTodo