import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Container } from '@mui/system';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Google from '../assets/google.svg';
import Facebook from '../assets/facebook-logo-2019.svg';
import Github from '../assets/github (2).svg';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <div className="login">
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          paddingTop="7rem"
          style={{ minHeight: '100vh' }}>
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid container direction="column" spacing={2}>
              <Avatar
                style={{
                  marginTop: '-25px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'red',
                  width: '100px',
                  height: '100px',
                }}
                src="/broken-image.jpg"
              />
              <h2
                style={{
                  marginTop: '-20px',
                  paddingBottom: '15px',
                  textAlign: 'center',
                }}>
                Login
              </h2>
              <Grid
                item
                style={{
                  paddingBottom: '17px',
                }}>
                <TextField
                  type="email"
                  fullWidth
                  label="Enter your email"
                  variant="standard"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  type={values.showPassword ? 'text' : 'password'}
                  fullWidth
                  label="Enter your password"
                  variant="standard"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePassVisibility}
                          arial-label="toggle password"
                          edge="end">
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    marginTop: '10px',
                  }}>
                  Login
                </Button>
              </Grid>
              <p
                style={{
                  textAlign: 'center',
                }}>
                {' '}
                <br /> --- Or Sign In With ---
              </p>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: '#4285F4',
                      color: 'white',
                    }}>
                    <img
                      src={Google}
                      alt="google"
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: '#3B5998',
                      color: 'white',
                    }}>
                    <img
                      src={Facebook}
                      alt="facebook"
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: '#333',
                      color: 'white',
                    }}>
                    <img
                      src={Github}
                      alt="github"
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
              <p style={{ textAlign: 'center' }}>
                {' '}
                <br />
                Don't have an account?{' '}
                <Link to="/register" style={{ color: 'red' }}>
                  Register
                </Link>
              </p>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
