/* eslint-disable no-undef */

import { loginUserWithEmailAndPassword } from '../../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../../src/store/slices/auth/authSlice';
import { startLoginUserWithEmailPassword } from '../../../../src/store/thunks/auth/startLoginUserWithEmailPassword';
import { testUser } from '../../../fixtures/authFixtures';

jest.mock('../../../../src/firebase/providers');

describe('tests in startLoginUserWithEmailPassword.js', () => {
  const dispatch = jest.fn();

  test('must call checkingCredentials and login', async () => {
    const loginData = {
      ok: true,
      ...testUser,
    };

    const userData = {
      email: testUser.email,
      password: '123456',
    };

    // mock
    await loginUserWithEmailAndPassword.mockResolvedValue(loginData);

    // thunk
    await startLoginUserWithEmailPassword(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('must call checkingCredentials and logout', async () => {
    const loginData = {
      ok: false,
      errorMessage:
        'An account already exists with the same email address but different sign-in credentials.',
    };

    const userData = {
      email: testUser.email,
      password: '123456',
    };

    // mock
    await loginUserWithEmailAndPassword.mockResolvedValue(loginData);

    // thunk
    await startLoginUserWithEmailPassword(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
