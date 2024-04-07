import { createAsyncThunk } from '@reduxjs/toolkit'
import { userType } from './userType'
import fetchUserService from '../../service/User/user.service'

export const fetchUsers = createAsyncThunk(userType, async (_, { rejectWithValue }) => {
    try {
        
        const response = await fetchUserService()
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})