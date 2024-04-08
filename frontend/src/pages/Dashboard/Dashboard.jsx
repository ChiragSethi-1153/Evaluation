import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Box, Typography, Stack } from '@mui/material';
import styles from './Dashboard.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { fetchTests } from '../../features/Test/testAction';

const Dashboard = () => {

  const dispatch = useDispatch()
  const totaltests = useSelector((state) => state?.test?.content?.totalTests)
  console.log(totaltests)
  useEffect(() => {
      dispatch(fetchTests())
  }, [dispatch])

  return (
    <Box sx={{display: 'flex'}} >
      <Box ><Sidebar /></Box>
       <Box className={styles.dashboard}>
        <Box>
           <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'24px'} >Dashboard</Typography>
        </Box>

        <Stack  direction={'row'} marginTop={5} flex={'flex-wrap'} gap={8}>
          <Box sx={{bgcolor: '#39A7FF', boxSizing: 'border-box', p: 3, textAlign: 'left', borderRadius: '10px', width: '200px' }} >
          <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'20px'} >Total Tests</Typography>
          <Typography fontFamily={'Poppins'} fontSize={'20px'} >{totaltests}</Typography>
          </Box>
          <Box sx={{bgcolor: '#ED5AB3', boxSizing: 'border-box', p: 3, textAlign: 'left', borderRadius: '10px', width: '200px' }} >
          <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'20px'} >Total Students</Typography>
          <Typography fontFamily={'Poppins'} fontSize={'20px'} ></Typography>
          </Box>
          
          

        </Stack>

        </Box> 
    </Box>
  )
}

export default Dashboard
