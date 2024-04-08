import React from 'react'
import {Box} from "@mui/material"
import UserSidebar from '../../components/UserSidebar/UserSideBar'

const UserSettings = () => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Box ><UserSidebar /></Box>
    </Box>
  )
}

export default UserSettings
