import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true, 
            state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.isAuth = false, 
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions
 
export default authSlice.reducer