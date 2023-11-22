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

jest.mock('../../../src/store/thunks/auth/startGoogleSignIn', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}));

describe('tests in <LoginPage></LoginPage>', () => {
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
});
