import { registerUserWithEmailAndPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../slices/auth/authSlice';

export const startRegisterUserWithEmailPassword = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());

      const response = await registerUserWithEmailAndPassword(userData);

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
