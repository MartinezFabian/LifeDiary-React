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

import { useState } from 'react';
import { Link as LinkReactRouter } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Create account">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField label="Full name" type="text" fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              autoComplete="username"
              fullWidth
              placeholder="example@email.com"
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
              <Button variant="contained" fullWidth>
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
