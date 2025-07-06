import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from './slices/user/signupSlice'
import loginSliceReducer from './slices/user/loginSlice'
import productSliceReducer from './slices/common/productSlice'
const store = configureStore({
    reducer:{
        signedDataShow:signupSliceReducer,
        loginUser:loginSliceReducer,
        productShow:productSliceReducer
    }
})

export default store