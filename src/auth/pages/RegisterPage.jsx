import { useState } from 'react';

import { Link as LinkReactRouter } from 'react-router-dom';

import {
  Button,
  FormControl,
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

export const RegisterPage = () => {
  const [formState, setFormState] = useState({ fullName: '', email: '', password: '' });

  const onFormChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
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
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
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
