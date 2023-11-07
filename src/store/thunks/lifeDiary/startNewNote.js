import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../../firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
} from '../../slices/lifeDiary/lifeDiarySlice';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(savingNewNote());

      const {
        auth: { uid },
      } = getState();

      const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
      };

      const newDocument = doc(collection(firestoreDB, `${uid}/lifeDiary/notes`));

      await setDoc(newDocument, newNote);

      newNote.id = newDocument.id;

      dispatch(addNewEmptyNote(newNote));
      dispatch(setActiveNote(newNote));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
