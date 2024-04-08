import React, { useState } from 'react'
import { Box, Typography, Stack, Paper, TextField, Button } from '@mui/material';
import styles from './EditTest.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { updateTest } from '../../features/Test/testAction';



const EditTest = ({ hide,  items }) => {

    console.log(items)

    const [inputs, setInputs] = useState({
        testId: items[0]?._id,
        testName: items[0]?.testName,
        instructions: items[0]?.instructions,
        duration: items[0]?.duration,
        
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTest(inputs))
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
    <Paper className={styles.editTestform} >
    <Stack className={styles.formStack} gap={1}>
          

          
          <TextField
            label="Test Name"
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
            value={inputs.testName}
            onChange={(e) => setInputs({...inputs, testName: e.target.value})}
          />

          <TextField
            label="Instructions"
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
            required
            value={inputs.instructions}
            onChange={(e) => setInputs({...inputs, instructions: e.target.value})}
          />
          <TextField
            label="Duration"
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
            required
            value={inputs.duration}
            onChange={(e) => setInputs({...inputs, duration: e.target.value})}
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

export default EditTest
