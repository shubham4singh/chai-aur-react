import {createContext, useContext} from "react"

export const TodoContext=createContext({

    /* array of todos and each todo is an object */
    todos:[
        {
            id:1,
            todo:" Todo msg",
            completed:false, /* is task completed */
        }
    ],

    /* functionalities ke undar hum definitions nhi likhte hai bs unke naam likhte hai */
    /* yeh functions kya krenge yeh hum bahar decide karenge -- in App.jsx */
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider









