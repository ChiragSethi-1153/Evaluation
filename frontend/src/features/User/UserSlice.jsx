import {createSlice} from '@reduxjs/toolkit'
import { fetchUsers } from './userAction'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer