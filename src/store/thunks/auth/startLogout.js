import { logoutFirebase } from '../../../firebase/providers';
import { clearNotesLogout } from '../../slices/lifeDiary/lifeDiarySlice';

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase();
      dispatch(clearNotesLogout());
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
