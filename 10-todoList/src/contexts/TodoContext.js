import React, { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed : false
        }
    ],
    addTask: () => {},
    updateTask: () => {},
    deleteTask: () => {},
    toggleTask: () => {}
});

export const TodoProvider = TodoContext.Provider; // isme components wrap honge

export const useTodo = () => useContext(TodoContext);