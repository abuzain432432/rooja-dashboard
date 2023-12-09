import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm.tsx';
import userEvent from '@testing-library/user-event';
// import * as userAuthApis from '../../store/apis/userAuthApis';
import { renderWithProviders } from '../../test-utils.tsx';
// import { worker } from '../../../mock/browser';
// import { invalidAuthHandler } from '../../../mock/handler';

describe('-----Unit Test for testing Loin Form-----', async () => {
  test('renders LoginForm component', async () => {
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    try {
      const res = await fetch(
        'https://roojaa-admin-proxy.dev.follomy.com/v1/accounts/*'
      );
      if (!res.ok) {
        throw await res.json();
      }
      const data = await res.json();
      console.log(data);
      console.log('_______________________________');
    } catch (error: any) {
      console.log('erro++++++++++++++++++++++++++++++');
      console.log(error);
    }
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
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    await userEvent.click(submitButton);

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
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    const emailLabelElement = screen.getByLabelText(/email/i);

    fireEvent.change(emailLabelElement, {
      target: { value: 'test12' },
    });

    await userEvent.click(submitButton);
    await waitFor(() => {
      const emailErrorElement = screen.queryByText(
        /The input is not valid E-mail!/i
      );
      const passwordErrorElement = screen.queryByText(
        /Please input your password!/i
      );
      expect(emailErrorElement).toBeInTheDocument();
      expect(passwordErrorElement).toBeInTheDocument();
    });
  });

  test('shows no  validation errors if credentails values are correct', async () => {
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByText(/submit/i);

    const passwordLabelElement = screen.getByLabelText(/password/i);
    const emailLabelElement = screen.getByLabelText(/email/i);

    fireEvent.change(emailLabelElement, {
      target: { value: 'testadmin@example.com' },
    });
    fireEvent.change(passwordLabelElement, {
      target: { value: 'PasswordAdmin1234567890@@' },
    });
    // worker.use(invalidAuthHandler);

    await userEvent.click(submitButton);

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
