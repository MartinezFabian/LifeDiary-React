import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Alert,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

import { AUTH_STATUS } from '../../store/slices/auth/authStatus';
import { startGoogleSignIn } from '../../store/thunks/auth/startGoogleSignIn';
import { startLoginUserWithEmailPassword } from '../../store/thunks/auth/startLoginUserWithEmailPassword';
import { resetErrorMessage } from '../../store/slices/auth/authSlice';

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === AUTH_STATUS.CHECKING, [status]);

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

    dispatch(startLoginUserWithEmailPassword(formState));
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
      <form onSubmit={onFormSubmit} aria-label="submit-form">
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
                inputProps={{
                  'aria-label': 'password-input',
                }}
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
            {errorMessage ? (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            ) : null}

            <Grid item xs={12} sm={6}>
              <Button type="submit" disabled={isAuthenticating} variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                aria-label="google-btn"
              >
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
              onClick={() => dispatch(resetErrorMessage())}
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
