// This code sets up a Redux store using Redux Toolkit. 

import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';  // Reducer

export const store=configureStore({
    reducer:todoReducer
})

// The store is exported so it can be used in the application, typically by wrapping the app with the Provider component from react-redux.

