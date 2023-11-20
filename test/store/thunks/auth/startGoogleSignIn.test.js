/* eslint-disable no-undef */
import { signInWithGoogle } from '../../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../../src/store/slices/auth/authSlice';
import { startGoogleSignIn } from '../../../../src/store/thunks/auth/startGoogleSignIn';

import { testUser } from '../../../fixtures/authFixtures';

jest.mock('../../../../src/firebase/providers');

describe('tests in startGoogleSignIn.js', () => {
  beforeEach(() => jest.clearAllMocks());

  test('must call checkingCredentials and login', async () => {
    const dispatch = jest.fn();

    const loginData = {
      ok: true,
      ...testUser,
    };

    // mock
    await signInWithGoogle.mockResolvedValue(loginData);

    // thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('must call checkingCredentials and logout with errorMessage', async () => {
    const dispatch = jest.fn();

    const loginData = {
      ok: false,
      errorMessage:
        'An account already exists with the same email address but different sign-in credentials.',
    };

    // mock
    await signInWithGoogle.mockResolvedValue(loginData);

    // thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
