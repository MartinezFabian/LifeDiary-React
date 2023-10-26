import { createSlice } from '@reduxjs/toolkit';
import { AUTH_STATUS } from './authStatus';

const initialState = {
  status: AUTH_STATUS.NOT_AUTHENTICATED,
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Código reducer
    },
    logout: (state, action) => {
      // Código reducer
    },
    checkingCredentials: (state) => {
      // Código reducer
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
