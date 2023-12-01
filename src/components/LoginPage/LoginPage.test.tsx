import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../store/store.ts';
import LoginForm from './LoginForm.tsx';
import userEvent from '@testing-library/user-event';
import * as userAuthApis from '../../store/apis/userAuthApis';

describe('App', () => {
  test('renders LoginForm component', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    const headingElement = screen.getByText(/welcome/i);
    const emailLabelElement = screen.getByLabelText(/email/i);
    const passwordLabelElement = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(emailLabelElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    screen.debug();
  });
  // {
  //   /* <div role="status" aria-live="polite" class="go3958317564">authentication failed. please check your credentials</div> */
  // }
  test('shows validation errors when submitting with empty fields', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    userEvent.click(submitButton);

    await waitFor(() => {
      const emailError = screen.getByText(/please input your email/i);
      const passwordError = screen.getByText(
        /Please input your password!/i
      );

      expect(emailError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
      screen.debug();
    });
  });
  test('shows validation errors when submitting with invalid email and empty password field', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    const emailLabelElement = screen.getByLabelText(/email/i);
    // const passwordLabelElement = screen.getByLabelText(/password/i);

    fireEvent.change(emailLabelElement, {
      target: { value: 'test12' },
    });

    userEvent.click(submitButton);

    await waitFor(() => {
      const errorElement = screen.getByText(
        /The input is not valid E-mail!/i
      );
      const passwordError = screen.getByText(
        /Please input your password!/i
      );
      expect(errorElement).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
    screen.debug();
  });
  test('submits the form with valid input and redirects to /dashboard', async () => {
    const mockUseLoginMutation = async () => ({
      data: {
        dashboard_data: {}, // Add your expected dashboard data here
        admin: {}, // Add your expected admin data here
        token: 'fakeToken',
      },
      isLoading: false,
    });

    // Save the original useLoginMutation function
    const originalUseLoginMutation = userAuthApis.useLoginMutation;

    // Override the useLoginMutation function with the mock implementation
    userAuthApis.useLoginMutation = mockUseLoginMutation;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    // Enter valid email and password
    userEvent.type(emailInput, 'validemail@example.com');
    userEvent.type(passwordInput, 'PasswordAdmin1234567890@@');

    // Click submit button
    userEvent.click(submitButton);

    // Wait for redirection
    await waitFor(() => {
      // Assert that redirection to /dashboard occurred
      expect(window.location.pathname).toBe('/dashboard');
    });
  });
});
