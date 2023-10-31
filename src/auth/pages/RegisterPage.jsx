import { useMemo, useState } from 'react';

import { Link as LinkReactRouter } from 'react-router-dom';

import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useRegisterFormValidation } from '../hooks/useRegisterFormValidation';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserWithEmailPassword } from '../../store/thunks/auth/startRegisterUserWithEmailPassword';
import { AUTH_STATUS } from '../../store/slices/auth/authStatus';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === AUTH_STATUS.CHECKING, [status]);

  const { formState, onFormChange, errors, validateForm } = useRegisterFormValidation();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(startRegisterUserWithEmailPassword(formState));
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Create account">
      <form onSubmit={onFormSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Full name"
              type="text"
              fullWidth
              name="fullName"
              value={formState.fullName}
              onChange={onFormChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              autoComplete="username"
              fullWidth
              placeholder="example@email.com"
              name="email"
              value={formState.email}
              onChange={onFormChange}
              error={!!errors.email}
              helperText={errors.email}
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
                value={formState.password}
                onChange={onFormChange}
                error={!!errors.password}
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
              <FormHelperText error={true}>{errors.password}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
            {errorMessage ? (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            ) : null}

            <Grid item xs={12}>
              <Button type="submit" disabled={isChecking} variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography marginRight={1}>Already have an account?</Typography>
            <Link component={LinkReactRouter} color="inherit" underline="none" to="/auth/login">
              log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
