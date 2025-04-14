// here we are checking whether the user is authenticated or not..

import { createSlice } from "@reduxjs/toolkit";

// status - authenticated or not
// userData -
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

