import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth/authSlice';
import { lifeDiarySlice } from './slices/lifeDiary/lifeDiarySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    lifeDiary: lifeDiarySlice.reducer,
  },
});
