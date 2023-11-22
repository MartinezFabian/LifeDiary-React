/* eslint-disable no-undef */
import { deleteNoteById, setSaving } from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startDeletingNote } from '../../../../src/store/thunks/lifeDiary/startDeletingNote';

describe('tests in startDeletingNote.js', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('must delete the active note', async () => {
    const activeNoteTest = {
      id: 'NOTE_TEST',
      title: '',
      body: '',
      date: new Date().getTime(),
      imagesUrls: [],
    };

    getState.mockReturnValue({
      auth: { uid: 'TEST_UID' },
      lifeDiary: {
        activeNote: activeNoteTest,
      },
    });

    await startDeletingNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(deleteNoteById(activeNoteTest.id));
  });
});
