import { createSlice } from "@reduxjs/toolkit";


const productdetailSlice = createSlice({
    name:"product_details",
    initialState:{
        productDetails:{},
    },
    reducers:{
        showproductDetails:(state,action)=>{
            state.productDetails=action.payload
        }
    }
})
export const{showproductDetails}= productdetailSlice.actions
export default productdetailSlice.reducer