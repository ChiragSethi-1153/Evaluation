import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import QuizIcon from '@mui/icons-material/Quiz';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Box, ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

  const [open, setOpen] = React.useState(true);

  const activeState = ({ isActive }) => {
    return {
      borderRadius: '0.4rem',
      width:"100%",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "#1a76d2" : "white",
      textDecoration: "none",
      fontWeight: "400",
      fontSize:"11px",
      lineHeight:"16px",
      marginBottom: '10px',
      display: "flex"
    };
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogOut = (e) => {
    localStorage.clear('token')
  }

  return (
    <Box className="sidebar" sx={{width: "300px", display: "flex", borderRight:"1px solid #E6E6E6", minHeight: '100vh', backgroundColor:'white', zIndex:"1",flexDirection:"column", alignItems:"center"}}>

    <List
      sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      >
        <ListItem sx={{marginBottom: '40px'}}>
            
            <Typography sx={{fontFamily: 'Poppins', marginLeft: "10px", fontWeight:'600', fontSize: '24px'}}>Quiz App</Typography>
        </ListItem>

      <NavLink to="/admin/dashboard" style={activeState} >
      <ListItemButton>

        <ListItemIcon>
         <DashboardIcon sx={{color: 'black'}} />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Dashboard</Typography>
      </ListItemButton>
      </NavLink>

      <NavLink to="/admin/tests" style={activeState} >

      <ListItemButton >
        <ListItemIcon>
          <QuizIcon sx={{color: 'black'}} />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >All Tests</Typography>
      </ListItemButton >
      </NavLink>

      <NavLink to="/admin/addtest" style={activeState} >
      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
         <AddBoxIcon  sx={{color: 'black'}} />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Add New Test</Typography>
        
      </ListItemButton>
      </NavLink>
      
       
    <NavLink to="/admin/settings" style={activeState}>

      <ListItemButton >
        <ListItemIcon>
          <SettingsIcon sx={{color: "black"}}/>
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Settings</Typography>
      </ListItemButton>
    </NavLink>

    <NavLink to="/login" style={activeState}>
        
      <ListItemButton onClick={(e) => handleLogOut(e)} >
        <ListItemIcon>
          <LogoutIcon sx={{color: "black"}} />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Log Out</Typography>
      </ListItemButton>
    </NavLink>
    </List>
    </Box>
  );
}
