import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from '../../../../src/store/slices/auth/authSlice';
import { AUTH_STATUS } from '../../../../src/store/slices/auth/authStatus';
import {
  authenticatedState,
  initialState,
  notAuthenticatedState,
  testUser,
} from '../../../fixtures/authFixtures';

/* eslint-disable no-undef */
describe('tests in authSlice.js', () => {
  test('must have the correct initial state', () => {
    expect(authSlice.name).toBe('auth');
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('must realize the authentication', () => {
    const state = authSlice.reducer(initialState, login(testUser));

    expect(state).toEqual(authenticatedState);
  });

  test('must realize the logout without error message', () => {
    const state = authSlice.reducer(initialState, logout());

    expect(state).toEqual(notAuthenticatedState);
  });

  test('must realize the logout with error message', () => {
    const errorMessage = 'Firebase: Error (auth/invalid-email).';

    const state = authSlice.reducer(initialState, logout(errorMessage));

    expect(state).toEqual({
      status: AUTH_STATUS.NOT_AUTHENTICATED,
      uid: null,
      email: null,
      displayName: null,
      photoUrl: null,
      errorMessage: 'Firebase: Error (auth/invalid-email).',
    });
  });

  test('must change the state to checking', () => {
    const state = authSlice.reducer(initialState, checkingCredentials());

    expect(state.status).toBe(AUTH_STATUS.CHECKING);
  });
});
