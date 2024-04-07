import {createSlice} from '@reduxjs/toolkit'
import { loginUsers, registerUsers } from './authAction'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default authSlice.reducer