/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginForm from './LoginForm';

import { setupStore } from '../../store/store.ts';

import {
  render as renderWithProviders,
  userEvent,
  screen,
  waitFor,
  fireEvent,
  act,
} from '../../../utils/test-utils';

describe('-----Unit Test for testing Loin Form-----', async () => {
  // await worker.start();
  test('renders LoginForm component', async () => {
    const store = setupStore({});
    renderWithProviders(<LoginForm />);
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
  });

  test('shows validation errors when submitting with empty fields', async () => {
    renderWithProviders(<LoginForm />);

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    await act(async () => {
      await userEvent.click(submitButton);
    });

    await waitFor(() => {
      const emailError = screen.getByText(/please input your email/i);
      const passwordError = screen.getByText(
        /Please input your password!/i
      );

      expect(emailError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });
  test('shows validation errors when submitting with invalid email and empty password field', async () => {
    renderWithProviders(<LoginForm />);

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    const emailLabelElement = screen.getByLabelText(/email/i);

    fireEvent.change(emailLabelElement, {
      target: { value: 'test12' },
    });

    await act(async () => {
      await userEvent.click(submitButton);
    });
    // screen.logTestingPlaygroundURL();
  });

  test('shows no  validation errors if credentails values are correct', async () => {
    renderWithProviders(<LoginForm />);

    const submitButton = screen.getByText(/submit/i);

    const passwordLabelElement = screen.getByLabelText(/password/i);
    const emailLabelElement = screen.getByLabelText(/email/i);

    fireEvent.change(emailLabelElement, {
      target: { value: 'testadmin@example.com' },
    });
    fireEvent.change(passwordLabelElement, {
      target: { value: 'PasswordAdmin1234567890@@' },
    });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    await waitFor(() => {
      const emailErrorElement = screen.queryByText(
        /The input is not valid E-mail!/i
      );
      const passwordErrorElement = screen.queryByText(
        /Please input your password!/i
      );
      expect(emailErrorElement).equals(null);
      expect(passwordErrorElement).equals(null);
    });
  });
});
