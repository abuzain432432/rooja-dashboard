import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import LoginForm from './LoginForm.tsx';
import userEvent from '@testing-library/user-event';
// import * as userAuthApis from '../../store/apis/userAuthApis';
import { renderWithProviders } from '../../test-utils.tsx';
import { server } from '../../mock/api/server.ts';
import { http } from 'msw';

describe('App', () => {
  test('renders LoginForm component', async () => {
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
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
    // screen.debug();
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
    userEvent.click(submitButton);

    await waitFor(() => {
      const emailError = screen.getByText(/please input your email/i);
      const passwordError = screen.getByText(
        /Please input your password!/i
      );

      expect(emailError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
      // screen.debug();
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
    // screen.debug();
  });

  it('handles good response', async () => {
    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
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
    // const loadingIcon = screen.getByRole('img', { name: /loading/i });

    // expect(loadingIcon).toBeInTheDocument();

    // server.use(
    //   http.post(
    //     'https://roojaa-admin-proxy.dev.follomy.com​/v1/authenticate',
    //     (req: any, res: any, ctx: any) => {
    //       return res(ctx.status(500));
    //     }
    //   )
    // );
    screen.debug();
  });
});
