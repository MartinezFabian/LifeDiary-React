import { doc, setDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../../firebase/config';
import { setSaving, updateNote } from '../../slices/lifeDiary/lifeDiarySlice';

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setSaving());

      const {
        auth: { uid },
        lifeDiary: { activeNote },
      } = getState();

      const noteToFirestore = { ...activeNote };
      delete noteToFirestore.id;

      const docRef = doc(firestoreDB, `${uid}/lifeDiary/notes/${activeNote.id}`);
      await setDoc(docRef, noteToFirestore, { merge: true });

      dispatch(updateNote(activeNote));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
