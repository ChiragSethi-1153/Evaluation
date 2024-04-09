import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box, Typography, Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import { getTest } from '../../features/Test/testAction';
import styles from './TestDetails.module.css'
import { fetchQuestions } from '../../features/Questions/questionAction';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import AddQuestions from '../../components/AddQuestions/AddQuestions';
import EditTest from '../../components/EditTest/EditTest';

const TestDetails = (items) => {

  const { testId } = useParams()
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTest(testId))
    dispatch(fetchQuestions(testId))

  }, [dispatch, testId ])

  const test = useSelector((state) => state?.test?.single)
  const { isLoading, content } = useSelector((state) => state?.question)

  const questions = content;
  console.log("qeus", questions)

  return (
    <Box sx={{ display: "flex" }}>
      <Box><Sidebar /></Box>
        
      <Box className={styles.testDetails}>
        <Box display={'flex'} justifyContent={'space-between'} width={"100%"} >
          <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'24px'} >{test[0]?.testName}</Typography>
          <Box marginRight={3}>
            <Button variant='contained' sx={{ textTransform: 'none', mr: 2 }} onClick={() => setOpen(true)}>Add Questions</Button>
            <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => setEditOpen(true)}>Edit Test Details</Button>
          </Box>
        </Box>
        <Stack marginTop={3} textAlign={'left'} gap={2} >
          <Typography fontFamily={'Poppins'} fontSize={'16px'} >{test[0]?.instructions}</Typography>
          <Typography fontFamily={'Poppins'} fontSize={'16px'} >Maximum Marks: {test[0]?.totalMarks}</Typography>
          <Typography fontFamily={'Poppins'} fontSize={'16px'} >Duration: {test[0]?.duration}</Typography>
        </Stack>

        {
          (isLoading ) ? <p>Loading....</p> : 
          <Box className={styles.questions}>
    
            {
              questions && questions.length > 0 &&
              questions?.map((i) => {
                return (
                  <>
                    <QuestionCard items={i} />
  
                  </>
                )
              })
            }
  
          </Box>
        }

        {
          open && <AddQuestions hide={() => setOpen(false)} testId={testId} />
        }
        {
          editOpen && <EditTest hide={() => setEditOpen(false)} items={test} />
        }

      </Box>

    </Box>
  )
}

export default TestDetails
