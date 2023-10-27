import { signInWithGoogle } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../slices/auth/authSlice';

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());

      const result = await signInWithGoogle();

      if (result.ok) {
        dispatch(login(result));
      } else {
        dispatch(logout(result.errorMessage));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
