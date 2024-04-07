import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUsers } from '../../features/Auth/authAction';
import { Box, Button, FormControl, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, Snackbar, Stack, TextField, Typography } from '@mui/material';
import validator from "validator";
import styles from './UserSignup.module.css'

const UserSignup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({ name: '', email: '', password: '', role: '' })
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [navigation, setNavigation] = useState(false)

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      setNavigation(true)
    } else {
      setErrorMessage("Is Not Strong Password");
      setNavigation(false)
    }
  };

const handleEmail = (e) => {
  setInputs({...inputs, email: e.target.value})
  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    }
}
const handleName = (e) => {
  setInputs({ ...inputs, name: e.target.value })
}
const handlePassword = (e) => {
  setInputs({...inputs, password: e.target.value})
}
const handleRole = (e) => {
  setInputs({ ...inputs, role: e.target.value })
}
  const handleSubmit = (e) => {
    e.preventDefault()
   if(navigation === false){
      alert('Kindly enter Correct Credentials')
   }
   else{
    console.log(inputs)
    dispatch(registerUsers(inputs))
    setOpen(true);
      setTimeout(() => {
        navigate("/login");

      }, 2000)
   }
    
  }

  return (
    <Box className={styles.signupPage}>

      <Paper className={styles.signupFormBox} >
        <Stack className={styles.formStack} gap={1}>
          <Typography
            align="left"
            sx={{
              height: 'fit-content',
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: '10px'
            }}
          >
            Sign up
          </Typography>

          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel >Role</InputLabel>
            <Select
              
              value={inputs.role}
              label="Role"
              required
              onChange={(e) => handleRole(e)}
            >
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Name"
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
            value={inputs.name}
            required
            onChange={(e) => { handleName(e) }}
          />

          <TextField
            label="Email"
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
            value={inputs.email}
            required
            onChange={(e) => { handleEmail(e) }}
          />
          <Typography style={{ color: "red" }}>{emailErrorMsg}</Typography>
          <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            inputProps={{
                style: {
             
                  padding: "14px 16px 14px 16px",
                },
              }}
              sx={{
                width: "100%",
                paddingRight: "0",
                borderRadius: '4px',
                height: '58px'
              }}
              value={inputs.password}
              required
              onChange={(e) => {
                handlePassword(e)
                validate(e.target.value)
              }}
            endAdornment={
              <InputAdornment position="end">
                <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: 500,

                      "&:hover": { background: "none", border: "none" },
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
              </InputAdornment>
            }
            label="Password"
          />
          <Typography paragraph='true'>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </Typography>
        </FormControl>


              <Typography>Already have an account <span style={{color: "#0b66c2", fontWeight: '600', cursor: 'pointer'}} onClick={() => navigate('/login')}>Login?</span></Typography>

          <Button
            variant="contained"
            className={styles.signupBtn}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign up
          </Button>
        </Stack>

      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message="SignedUp Successfully"
      />
    </Box>
  )
}

export default UserSignup
