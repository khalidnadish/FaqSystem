import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserDetail } from "../../../helper/context/userContext";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      We are Here {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const { userId, userName, userAvatar, setUserId, setIslogin, islogin } =
    useContext(UserDetail);
  const [email, setEmail] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // event.preventDefault();
    setUserId(email);
    setIslogin(true);
    localStorage.setItem("userIslogged", "true");
    navigate("/");
  };

useEffect(() => {
  // TODO:  dev mode only for test then remove it
    setUserId(email);
    setIslogin(true);
    handleSubmit()
}, [])



  const handleGuest = (event) => {
    setUserId(0);
    setIslogin(true);
    localStorage.setItem("userIslogged", "true");
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={{()=>{handleSubmit}}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {
                handleGuest();
              }}
              sx={{ mt: 0.1, mb: 2 }}
            >
              Login As Gust
            </Button>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 0.1, mb: 2 }}
            >
              <Grid item xs align="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <FcGoogle />
                </IconButton>
              </Grid>
              <Grid item xs align="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <BsFacebook />
                </IconButton>
              </Grid>
              <Grid item xs align="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <TwitterIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
