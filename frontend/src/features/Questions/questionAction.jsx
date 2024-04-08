import { createAsyncThunk } from '@reduxjs/toolkit'

import { createQuestionsType, fetchQuestionsType, updateQuestionsType} from './questionType'

import fetchQuestionService from '../../service/Questions/getQuestions.service'
import createQuestionService from '../../service/Questions/addQuestion.service'
import updateQuestionService from '../../service/Questions/updateQuestion.service'

export const fetchQuestions = createAsyncThunk(fetchQuestionsType, async (testId, { rejectWithValue }) => {
    try {
        
        const response = await fetchQuestionService(testId)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const createQuestions = createAsyncThunk(createQuestionsType, async (inputs, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await createQuestionService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const updateQuestion = createAsyncThunk(updateQuestionsType, async (inputs, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await updateQuestionService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})