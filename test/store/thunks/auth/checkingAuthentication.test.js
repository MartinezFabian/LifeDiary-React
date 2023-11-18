/* eslint-disable no-undef */

import { checkingCredentials } from '../../../../src/store/slices/auth/authSlice';
import { checkingAuthentication } from '../../../../src/store/thunks/auth/checkingAuthentication';

describe('tests in checkingAuthentication.js', () => {
  test('must invoke the checkingCredentials action creator', async () => {
    const dispatch = jest.fn();

    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
