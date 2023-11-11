import { deleteDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../../firebase/config';
import { deleteNoteById, setSaving } from '../../slices/lifeDiary/lifeDiarySlice';

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setSaving());

      const {
        auth: { uid },
        lifeDiary: { activeNote },
      } = getState();

      const docRef = doc(firestoreDB, `${uid}/lifeDiary/notes/${activeNote.id}`);
      await deleteDoc(docRef);

      dispatch(deleteNoteById(activeNote.id));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
