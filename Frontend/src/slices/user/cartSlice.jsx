import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartSum:0,
        cartData:[]
    },
    reducers:{
        sum:(state,action)=>{
            state.cartSum += action.payload
        }
    }
})
export const {sum} = cartSlice.actions
export default cartSlice.reducer