import { setSaving, updateNote } from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startSavingNote } from '../../../../src/store/thunks/lifeDiary/startSavingNote';

/* eslint-disable no-undef */
describe('tests in startSavingNote.js', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('must update the active note', async () => {
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

    await startSavingNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(updateNote(activeNoteTest));
  });
});
