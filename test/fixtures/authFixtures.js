import { AUTH_STATUS } from '../../src/store/slices/auth/authStatus';

export const initialState = {
  status: AUTH_STATUS.CHECKING,
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: AUTH_STATUS.AUTHENTICATED,
  uid: '123abc',
  email: 'testing@gmail.com',
  displayName: 'Test user',
  photoUrl: 'https://test.png',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: AUTH_STATUS.NOT_AUTHENTICATED,
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const testUser = {
  uid: '123abc',
  email: 'testing@gmail.com',
  displayName: 'Test user',
  photoUrl: 'https://test.png',
};
