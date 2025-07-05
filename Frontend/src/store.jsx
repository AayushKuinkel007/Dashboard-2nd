import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from './slices/User/signupSlice'
import loginSliceReducer from './slices/User/loginSlice'
const store = configureStore({
    reducer:{
        signedDataShow:signupSliceReducer,
        loginUser:loginSliceReducer
    }
})

export default store