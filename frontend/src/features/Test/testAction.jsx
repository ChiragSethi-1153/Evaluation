import { createAsyncThunk } from '@reduxjs/toolkit'

import { createTestType, fetchTestType, getTestType, updateTestType } from './testType'
import fetchTestService from '../../service/Tests/getTest.service'
import getTestService from '../../service/Tests/test.service'
import createTestService from '../../service/Tests/createTest.service'
import updateTestService from '../../service/Tests/updateTest.service'

export const fetchTests = createAsyncThunk(fetchTestType, async (_, { rejectWithValue }) => {
    try {
        
        const response = await fetchTestService()
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const getTest = createAsyncThunk(getTestType, async (testId, { rejectWithValue }) => {
    try {
        console.log(testId)
        const response = await getTestService(testId)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const createTest = createAsyncThunk(createTestType, async (inputs, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await createTestService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const updateTest = createAsyncThunk(updateTestType, async (inputs, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await updateTestService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})