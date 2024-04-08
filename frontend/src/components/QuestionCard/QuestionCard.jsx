import {Box, Paper, Stack, Typography, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditQuestions from '../EditQuestion/EditQuestion';

const QuestionCard = ({items}) => {
    const [open, setOpen] = useState(false)


    console.log(items)
  return (
    <Paper sx={{width: "95%", height: 'fit-content', m: 2, boxSizing: 'border-box', p:2}} >
        
        <Stack alignItems={"flex-start"}  height={"100%"} >
            <Box width={"100%"} textAlign={'left'} display={'flex'} justifyContent={'space-between'} >
                <Typography fontFamily={"Poppins"} fontSize={'18px'} fontWeight={'bold'} marginBottom={1} >Q: {items?.question}</Typography>
                <Button onClick={() => setOpen(true)} ><EditOutlinedIcon  /></Button>
            </Box>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} >Options: </Typography>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} marginLeft={4} >1: {items?.option1}</Typography>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} marginLeft={4} >2: {items?.option2}</Typography>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} marginLeft={4} >3: {items?.option3}</Typography>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} marginLeft={4} >4: {items?.option4}</Typography>
        <Divider />
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} >Correct Option: {items?.correctOption}</Typography>
        <Typography fontFamily={"Poppins"} fontSize={'16px'} sx={{textAlign: 'left'}}  marginBottom={1} >Marks: {items?.marks}</Typography>

        

        </Stack>
        {
            open && <EditQuestions hide={() => setOpen(false)} items={items}  />
        }
    </Paper>
  )
}

export default QuestionCard
