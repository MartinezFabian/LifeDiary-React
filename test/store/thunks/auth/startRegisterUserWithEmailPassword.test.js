/* eslint-disable no-undef */

import { registerUserWithEmailAndPassword } from '../../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../../src/store/slices/auth/authSlice';
import { startRegisterUserWithEmailPassword } from '../../../../src/store/thunks/auth/startRegisterUserWithEmailPassword';
import { testUser } from '../../../fixtures/authFixtures';

jest.mock('../../../../src/firebase/providers');

describe('tests in startRegisterUserWithEmailPassword.js', () => {
  const dispatch = jest.fn();

  test('must call checkingCredentials and login', async () => {
    const registerData = {
      ok: true,
      ...testUser,
    };

    const userData = {
      email: testUser.email,
      password: '123456',
      fullName: testUser.displayName,
    };

    // mock
    await registerUserWithEmailAndPassword.mockResolvedValue(registerData);

    // thunk
    await startRegisterUserWithEmailPassword(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(registerData));
  });

  test('must call checkingCredentials and logout', async () => {
    const registerData = {
      ok: false,
      errorMessage:
        'An account already exists with the same email address but different sign-in credentials.',
    };

    const userData = {
      email: testUser.email,
      password: '123456',
      fullName: testUser.displayName,
    };

    // mock
    await registerUserWithEmailAndPassword.mockResolvedValue(registerData);

    // thunk
    await startRegisterUserWithEmailPassword(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(registerData.errorMessage));
  });
});
