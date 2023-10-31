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
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS.CHECKING;
    },

    login: (state, action) => {
      state.status = AUTH_STATUS.AUTHENTICATED;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
      state.errorMessage = null;
    },

    logout: (state, action) => {
      state.status = AUTH_STATUS.NOT_AUTHENTICATED;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = action.payload;
    },

    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkingCredentials, resetErrorMessage } = authSlice.actions;
