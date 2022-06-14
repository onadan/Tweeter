import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        name: 'Deji',
        count: 0
    },
    reducers:{
        changeName:(state, action) =>{
            state.name = action.payload
        }
    }
})

export const {changeName} = userSlice.actions

export default userSlice.reducer