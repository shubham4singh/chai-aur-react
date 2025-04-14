// nano id generates the unique id.
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos ek array hai and uske under individual todos hai jo humne objects ke form mai rakha hai.
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // creates unique id
                text: action.payload // payload is an object  // action.payload.text
                // Contains the data passed when the action is dispatched (e.g., the text of the todo).
            }
            // state update
            state.todos.push(todo) // state ke under todos (upar)
        },

        removeTodo: (state, action) => {
            // Creates a new array excluding the todo with the matching ID.
            // action.payload: Contains the ID of the todo to be removed.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // action.payload.id
        },

        // this update is referred from ai
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id == id);

            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        }
    }
});
 
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer // saare reducers ki list export ho rhi
// The export default syntax is used to export the reducer as the default export of the module.
// This allows you to import it in other files (like store.js) using any name you choose.