import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Stack, Button } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import { getTest } from '../../features/Test/testAction';
import styles from './UserTestDetails.module.css'
import { fetchQuestions } from '../../features/Questions/questionAction';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import AddQuestions from '../../components/AddQuestions/AddQuestions';
import EditTest from '../../components/EditTest/EditTest';
import UserSidebar from '../../components/UserSidebar/UserSideBar';

const UserTestDetails = (items) => {

    const {testId} = useParams()
    const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTest(testId))
        dispatch(fetchQuestions(testId))
    }, [dispatch])

    const test = useSelector((state) => state?.test?.single) 
    const questions = useSelector((state) => state?.question?.content) 
    console.log(questions)

  return (
    <Box sx={{display: "flex"}}>
        <Box><UserSidebar /></Box>

        <Box className={styles.testDetails}>
        <Box display={'flex'} justifyContent={'space-between'} width={"100%"} >
           <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'24px'} >{test[0]?.testName}</Typography>
          <Box marginRight={3}>
          <Button variant='contained' sx={{textTransform: 'none', mr: 2}} onClick={() => navigate(`/user/test/${test[0]?._id}`)}>Start Test</Button>
         
          </Box>
        </Box>
        <Stack marginTop={3}textAlign={'left'} gap={2} >
        <Typography fontFamily={'Poppins'} fontSize={'16px'} >{test[0]?.instructions}</Typography>
        <Typography fontFamily={'Poppins'} fontSize={'16px'} >Maximum Marks: {test[0]?.totalMarks}</Typography>
        <Typography fontFamily={'Poppins'} fontSize={'16px'} >Duration: {test[0]?.duration}</Typography>
        </Stack>
        
        
        
        </Box>
        
    </Box>
  )
}

export default UserTestDetails