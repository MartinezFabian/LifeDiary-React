import { checkingCredentials } from '../../slices/auth/authSlice';

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
