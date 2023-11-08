import { collection, getDocs } from 'firebase/firestore/lite';
import { firestoreDB } from '../../../firebase/config';
import { setNotes } from '../../slices/lifeDiary/lifeDiarySlice';

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    try {
      const {
        auth: { uid },
      } = getState();

      const collectionRef = collection(firestoreDB, `${uid}/lifeDiary/notes`);
      const documents = await getDocs(collectionRef);

      const notes = [];

      documents.forEach((document) => {
        notes.push({ id: document.id, ...document.data() });
      });

      dispatch(setNotes(notes));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
