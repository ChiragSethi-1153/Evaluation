import React, { useState } from 'react'
import { Box, Typography, Stack, Paper, TextField, Button } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './AddTest.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { createTest } from '../../features/Test/testAction';

const AddTest = () => {

  const [inputs, setInputs] = useState({testName: '', instructions: '', duration: ''})
  const dispatch = useDispatch()
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTest(inputs))
    window.alert('Test Created', navigate('/admin/tests'))
}


  return (
    <Box sx={{display: 'flex'}}>
        <Box><Sidebar /></Box>

        <Box className={styles.addTest}>

        <Box>
           <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'24px'} >Create New Test</Typography>
        </Box>
        
        <Box sx={{width: '100%', height: "100%", display: 'flex', alignItems: "center", justifyContent: "center"}}  > 

        <Paper className={styles.addtestform} >
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

        </Box> 
    </Box>
  )
}

export default AddTest
