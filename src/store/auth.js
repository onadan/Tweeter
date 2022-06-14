import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'user',
    initialState:{
        loading: false
    },
    reducers:{
        Login:(state, action) =>{
            state.loading = !state.loading
            console.log(action.payload);
        },
        register: (state, action) =>{
            state.loading = !state.loading
            console.log(action.payload);
        }
    }
})

export const {Login} = authSlice.actions

export default authSlice.reducer