import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as LinkReactRouter } from 'react-router-dom';

import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication } from '../../store/thunks/auth/checkingAuthentication';
import { startGoogleSignIn } from '../../store/thunks/auth/startGoogleSignIn';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({ email: '', password: '' });

  const onFormChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onFormSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              autoComplete="username"
              fullWidth
              placeholder="example@email.com"
              name="email"
              onChange={onFormChange}
              value={formState.email}
            />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                id="outlined-adornment-password"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={onFormChange}
                value={formState.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google></Google>
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" marginTop={2}>
            <Link
              component={LinkReactRouter}
              color="inherit"
              underline="none"
              to={'/auth/register'}
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
