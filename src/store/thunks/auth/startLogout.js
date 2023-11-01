import { logoutFirebase } from '../../../firebase/providers';

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase();
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
