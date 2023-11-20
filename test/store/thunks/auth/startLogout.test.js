/* eslint-disable no-undef */

import { logoutFirebase } from '../../../../src/firebase/providers';
import { clearNotesLogout } from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startLogout } from '../../../../src/store/thunks/auth/startLogout';

jest.mock('../../../../src/firebase/providers');

describe('tests in startLogout.js', () => {
  beforeEach(() => jest.clearAllMocks());
  const dispatch = jest.fn();

  test('must invoke logoutFirebase and dispatch to clearNotesLogout', async () => {
    // thunk
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
  });
});
