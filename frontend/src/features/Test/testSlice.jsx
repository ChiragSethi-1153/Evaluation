import {createSlice} from '@reduxjs/toolkit'
import { createTest, fetchTests, getTest, updateTest } from './testAction'

export const testSlice = createSlice({
    name: 'tests',
    initialState: {
        isLoading: false,
        error: null,
        content: [],
        single: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTests.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTests.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchTests.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(getTest.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTest.fulfilled, (state, action) => {
            state.isLoading = false
            state.single = action.payload
        })
        builder.addCase(getTest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(createTest.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createTest.fulfilled, (state, action) => {
            state.isLoading = false
            state.single = action.payload
        })
        builder.addCase(createTest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(updateTest.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateTest.fulfilled, (state, action) => {
            state.isLoading = false
            state.single = action.payload
        })
        builder.addCase(updateTest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default testSlice.reducer