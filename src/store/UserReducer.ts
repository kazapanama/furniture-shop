import { createSlice } from "@reduxjs/toolkit";
import { Admin } from "../types/Admin"; 

const initialState: Admin = {
    email: "",
};


const UserSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        loginUser:(state,action) => {
           state = {email:action.payload}
            return state
        },

        logoutUser:(state) => {
            state = initialState
             return state
         },
       
        
    }
})

export const {loginUser,logoutUser} = UserSlice.actions

export default UserSlice.reducer