/* eslint-disable no-undef */

import { setNotes } from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startLoadingNotes } from '../../../../src/store/thunks/lifeDiary/startLoadingNotes';

describe('tests in  startLoadingNotes.js', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('must load the notes from firestore', async () => {
    getState.mockReturnValue({ auth: { uid: 'TEST_UID' } });

    await startLoadingNotes()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setNotes(expect.any(Array)));
  });
});
