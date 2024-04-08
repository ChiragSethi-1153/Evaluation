import React from 'react'
import {Box} from "@mui/material"
import UserSidebar from '../../components/UserSidebar/UserSideBar'
import styles from './StartTest.module.css'

const StartTest = () => {

    

  return (
    <Box sx={{ display: 'flex' }}>
        <Box ><UserSidebar /></Box>
        <Box className={styles.startTest}>

        </Box>
    </Box>
  )
}

export default StartTest
