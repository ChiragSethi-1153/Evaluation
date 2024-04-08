import { Paper, Typography, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import TestDetails from '../../pages/TestDetails/TestDetails'

const TestCard = ({items}) => {

  
  const role = useSelector((state) => state?.auth?.content?.user?.role)

  if(role === "admin"){

    return (
      <NavLink to={`/admin/tests/${items?._id}`} style={{textDecoration: 'none'}} >
        
      <Paper sx={{minWidth: "200px", height: '160px', m: 2, p: 2}} >
          
          <Stack alignItems={"flex-start"} justifyContent={'space-around'} height={"100%"} >
          <Typography fontFamily={"Poppins"} fontSize={'18px'} fontWeight={'bold'} marginBottom={1} >{items?.testName}</Typography>
          <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} >Duration: {items?.duration}</Typography>
  
          <Typography fontFamily={"Poppins"} fontSize={'15px'}  marginBottom={1} >Max Marks: {items?.totalMarks}</Typography>
  
          </Stack>
          
      </Paper>
      </NavLink>
    )
  }
  else{
    return (
      <NavLink to={`/user/tests/${items?._id}`} style={{textDecoration: 'none'}} >
        
      <Paper sx={{minWidth: "200px", height: '160px', m: 2, p: 2}} >
          
          <Stack alignItems={"flex-start"} justifyContent={'space-around'} height={"100%"} >
          <Typography fontFamily={"Poppins"} fontSize={'18px'} fontWeight={'bold'} marginBottom={1} >{items?.testName}</Typography>
          <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} >Duration: {items?.duration}</Typography>
  
          <Typography fontFamily={"Poppins"} fontSize={'15px'}  marginBottom={1} >Max Marks: {items?.totalMarks}</Typography>
  
          </Stack>
          
      </Paper>
      </NavLink>
    )
  }

}

export default TestCard
