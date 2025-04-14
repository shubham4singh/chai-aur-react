// here hum saare todos ko list krenge

import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { updateTodo } from '../features/todo/todoSlice'

function Todos() {
    // The useSelector hook is used to extract the todos array from the Redux store. The state structure is defined in the todoSlice (e.g., state.todos).
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    // State to manage editing
    const [editingId, setEditingId] = useState(null); // Tracks which todo is being edited
    const [updatedText, setUpdatedText] = useState(''); // Stores the updated text

    // Function to handle updating a todo
    const handleUpdate = (id) => {
        if (updatedText.trim() !== '') { // Ensure the input is not empty
            dispatch(updateTodo({ id, newText: updatedText })); // Dispatch the updateTodo action
            setEditingId(null); // Exit editing mode
            setUpdatedText(''); // Clear the input field
        }
    };



    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {/* todos.map: Iterates over the todos array and renders each todo as a list item (<li>) */}
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}>
                        {/* <div className='text-white'>{todo.text}</div> */}


                        {/* Input field of each todo */}

                        {editingId === todo.id ? (
                            <input
                                type="text"
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                                className="bg-zinc-700 text-white px-2 py-1 rounded"
                                placeholder="Enter updated text"
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div>
                        )}


                        {/* Buttons for update and delete */}

                        <div className="flex gap-2">

                            {editingId === todo.id ? (
                                // Save button (visible during editing)
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Save
                                </button>
                            ) : (
                                // Update button (visible when not editing)
                                <button
                                    onClick={() => {
                                        setEditingId(todo.id); // Enter editing mode
                                        setUpdatedText(todo.text); // Pre-fill input with current todo text
                                    }}
                                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                                >
                                    Update
                                </button>
                            )}

                            {/* Delete Todo Button */}
                            <button onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>

                        </div>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos