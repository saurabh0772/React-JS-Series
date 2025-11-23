import React, { useState } from 'react'

function TodoTask({todos, setTodos, todo}) {
    const [isEditable, setIsEditable] = useState(false);
    const [editedText, setEditedText] = useState("");


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }  

  const updateTodo = (id) => {

    if(isEditable){
        setTodos(todos.map((val) => (
            (val.id == id) ? {...val, text:editedText} : val
            
        )))
    }

    setIsEditable(!isEditable);
  }

  const toggleBtn = (id) => {
    setTodos(todos.map((val) => (
        (val.id == id) ? {...val, isCompleted: !val.isCompleted} : val
    )))
  }

  return (
    <>
        <div className='w-full bg-gray-600  rounded-md'>

            <input type="checkbox" className='py-2 ml-2' onClick={() => toggleBtn(todo.id)}/>

            <input type="text"  readOnly={!isEditable} value={(isEditable) ? editedText : todo.text} 
            onChange={(e) => setEditedText(e.target.value)}
            className='w-82 px-2 py-2 outline-none bg-gray-600 rounded-l-md ' 
            style={{textDecoration : (todo.isCompleted) ? "line-through" : "none"}}
            onKeyDown={(e) => {
                if(e.key == 'Enter'){
                    updateTodo(todo.id)
                }  
            }}
            />

            <button className='w-11 px-auto py-2 bg-yellow-400 text-black cursor-pointer'
                onClick={() => {updateTodo(todo.id)}}
            >{isEditable ? "Save" : "Edit"}</button>

            <button className='py-2 bg-red-500 px-5.5 rounded-r-md cursor-pointer'
                onClick={() => {deleteTodo(todo.id)}}
            >X</button>

        </div>
    </>
  )
}

export default TodoTask