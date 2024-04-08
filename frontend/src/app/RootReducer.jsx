import { combineReducers } from "@reduxjs/toolkit"
import authSlice from './../features/Auth/authSlice';
import userSlice  from "../features/User/userSlice";
import testSlice from "../features/Test/testSlice";
import questionSlice from "../features/Questions/questionSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    test: testSlice,
    question: questionSlice
})

export default rootReducer