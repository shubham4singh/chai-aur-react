/* Individual Todo item */

import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false); /* Tracks whether the todo is currently in edit mode (boolean) */
    const [todoMsg, setTodoMsg] = useState(todo.todo);  /* Stores the current text content of the todo (string) */
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (

        /* CSS for completed and uncompleted todo */
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            {/* checkbox */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed} /* If todo.completed is true, the checkbox appears checked. Value context se aa rhi */
                onChange={toggleCompleted}
            />

            {/* Dynamic input box acc to todo editable or not  */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg 
                    ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
                    ${todo.completed ? "line-through" : ""}`
                }
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev); /* React detects the state change and re-renders the component. */
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
