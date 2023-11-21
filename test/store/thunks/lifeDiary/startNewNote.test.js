/* eslint-disable no-undef */

import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { firestoreDB } from '../../../../src/firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
} from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startNewNote } from '../../../../src/store/thunks/lifeDiary/startNewNote';

describe('tests in startNewNote.js', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('must create a new empty note', async () => {
    getState.mockReturnValue({ auth: { uid: 'TEST_UID' } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());

    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
        imagesUrls: [],
      })
    );

    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
        imagesUrls: [],
      })
    );

    // delete firebase test data

    const colecctionRef = collection(firestoreDB, `TEST_UID/lifeDiary/notes`);
    const docs = await getDocs(colecctionRef);

    const deletePromises = [];

    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);
  }, 10000);
});
