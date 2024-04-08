import React, { useState } from 'react'
import { Box, Typography, Stack, Paper, TextField, Button } from '@mui/material';
import styles from './EditQuestion.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { updateQuestion } from '../../features/Questions/questionAction';

const EditQuestions = ({ hide,  items }) => {

    console.log(items)

    const [inputs, setInputs] = useState({
        questionId: items?._id, 
        question: items?.question, 
        option1: items?.option1, 
        option2: items?.option2, 
        option3: items?.option3, 
        option4: items?.option4, 
        correctOption: items?.correctOption, 
        marks: items?.marks
    })
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateQuestion(inputs))
        hide()
    }


  return (  
    <Box>

        <Box
        className="modal-wrapper"
        onClick={() => hide()}
        style={{
            position: " fixed",
            left: "0",
            right: "0",
            bottom: "0",
            top: "0",
            backgroundColor: "rgba(230, 226, 226, 0.804)",
        }}
        />
    <Paper className={styles.editQuestionform} >
        <Stack className={styles.formStack} gap={1}>
      

      
      <TextField
        label="Question"
        // variant="filled"
        sx={{
            width: "100%",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
            marginBottom: '10px'
        }}
        required
        value={inputs.question}
        onChange={(e) => setInputs({...inputs, question: e.target.value})}
        />

      <TextField
        label="Option 1"
        
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        // value={inputs.email}
        required
        value={inputs.option1}
        onChange={(e) => setInputs({...inputs, option1: e.target.value})}
        // onChange={(e) => { handleEmail(e) }}
        />
      <TextField
        label="Option 2"
        // variant="filled"
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        // value={inputs.email}
        value={inputs.option2}
        onChange={(e) => setInputs({...inputs, option2: e.target.value})}
        required
        // onChange={(e) => { handleEmail(e) }}
        />
      <TextField
        label="Option 3"
        // variant="filled"
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        value={inputs.option3}
        onChange={(e) => setInputs({...inputs, option3: e.target.value})}
        />
      <TextField
        label="Option 4"
        // variant="filled"
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        value={inputs.option4}
        onChange={(e) => setInputs({...inputs, option4: e.target.value})}
        />
      <TextField
        label="Correct Option"
        // variant="filled"
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        value={inputs.correctOption}
        required
        onChange={(e) => setInputs({...inputs, correctOption: e.target.value})}
        />
      <TextField
        label="Marks"
        // variant="filled"
        sx={{
            width: "100%",
            fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
            fontWeight: "400",
            fontSize: "32px",
            position: "relative",
            zIndex: "1",
            borderRadius: "4px !important",
            background: "none",
        }}
        // value={inputs.email}
        required
        value={inputs.marks}
        onChange={(e) => setInputs({...inputs, marks: e.target.value})}
        // onChange={(e) => { handleEmail(e) }}
        />


          
      <Button
        variant="contained"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
        Submit
      </Button>
    </Stack>
    </Paper>
          </Box>
  )
}

export default EditQuestions
