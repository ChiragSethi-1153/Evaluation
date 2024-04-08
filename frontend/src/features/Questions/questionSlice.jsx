import {createSlice} from '@reduxjs/toolkit'
import { createQuestions, fetchQuestions } from './questionAction'

export const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        isLoading: false,
        error: null,
        content: [],
        
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.content = action.payload
        })
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(createQuestions.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createQuestions.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(createQuestions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        
    }
})

export default questionSlice.reducer