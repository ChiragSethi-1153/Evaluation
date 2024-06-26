import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from "validator";
import { loginUsers } from '../../features/Auth/authAction';
import CloseIcon from '@mui/icons-material/Close'
import styles from './UserLogin.module.css'
const UserLogin = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      setErrorMessage("Is Not a valid Password");
      setNavigation(false)
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [inputs, setInputs] = useState({ email: "", password: ""});

  const handleEmail = (e) => {
    setInputs({ ...inputs, email: e.target.value })
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    };
  };

  const handlePassword = (e) => {
    setInputs({ ...inputs, password: e.target.value });
  };
  // const handleRole = (e) => {
  //   setInputs({ ...inputs, role: e.target.value })
  // }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (navigation === false) {
      setValid(true)
      
    }
    else if (inputs.email !== '' && inputs.password !== '') {
      console.log(inputs);
      dispatch(loginUsers(inputs));
      setOpen(true);
      setTimeout(() => {
        navigate("/home");

      }, 2000)
      
    }
  };


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );




  return (
    <Box className={styles.loginPage}>

      <Paper className={styles.loginFormBox} >
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
            Sign in
          </Typography>

          

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


              <Typography>Don't have an account <span style={{color: "#0b66c2", fontWeight: '600', cursor: 'pointer'}} onClick={() => navigate('/signup')}>Register?</span></Typography>

          <Button
            variant="contained"
            className={styles.loginBtn}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </Button>
        </Stack>

      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message="LoggedIn Successfully"
      />
      <Snackbar
        open={valid}
        autoHideDuration={3000}
        onClose={(e) => handleClose(e)}
        message="Enter Valid Credentials"
        action={action}
      />
    </Box>
  )
}

export default UserLogin
