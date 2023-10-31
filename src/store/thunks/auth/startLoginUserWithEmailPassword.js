import { loginUserWithEmailAndPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../slices/auth/authSlice';

export const startLoginUserWithEmailPassword = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const response = await loginUserWithEmailAndPassword(userData);

      if (response.ok) {
        dispatch(login(response));
      } else {
        dispatch(logout(response.errorMessage));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
