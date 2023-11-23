/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/slices/auth/authSlice';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },

  preloadedState: {
    auth: notAuthenticatedState,
  },
});

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginUserWithEmailPassword = jest.fn();

jest.mock('../../../src/store/thunks/auth/startGoogleSignIn', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}));

jest.mock('../../../src/store/thunks/auth/startLoginUserWithEmailPassword', () => ({
  startLoginUserWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginUserWithEmailPassword({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

describe('tests in <LoginPage></LoginPage>', () => {
  beforeEach(() => jest.clearAllMocks());

  test('must render the component correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage></LoginPage>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('Google button must dispatch startGoogleSignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage></LoginPage>
        </MemoryRouter>
      </Provider>
    );

    const btnGoogle = screen.getByLabelText('google-btn');

    fireEvent.click(btnGoogle);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('onSubmit must dispatch startLoginUserWithEmailPassword', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage></LoginPage>
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Email' });
    fireEvent.change(emailField, { target: { name: 'email', value: 'fabian@gmail.com' } });

    const passwordField = screen.getByLabelText('password-input');
    fireEvent.change(passwordField, { target: { name: 'password', value: '123456' } });

    const loginForm = screen.getByLabelText('submit-form');
    fireEvent.submit(loginForm);

    expect(mockStartLoginUserWithEmailPassword).toHaveBeenCalledWith({
      email: 'fabian@gmail.com',
      password: '123456',
    });
  });
});
