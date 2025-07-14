import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from './slices/user/signupSlice'
import loginSliceReducer from './slices/user/loginSlice'
import productSliceReducer from './slices/common/productSlice'
import productdetailSliceReducer from "./slices/common/productdetailSlice";
const store = configureStore({
    reducer:{
        signedDataShow:signupSliceReducer,
        loginUser:loginSliceReducer,
        productShow:productSliceReducer,
        productDetail:productdetailSliceReducer,
    }
})

export default store