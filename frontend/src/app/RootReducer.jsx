import { combineReducers } from "@reduxjs/toolkit"
import authSlice from './../features/Auth/authSlice';
import userSlice  from "../features/User/userSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
})

export default rootReducer