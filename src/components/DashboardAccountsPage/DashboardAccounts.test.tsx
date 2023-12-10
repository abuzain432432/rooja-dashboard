import { MemoryRouter } from 'react-router-dom';

import { expect } from 'vitest';
import DashboardAccounts from './DashboardAccounts.tsx';
import {
  render as renderWithProviders,
  userEvent,
  screen,
  waitFor,
  fireEvent,
  act,
} from '../../../utils/test-utils';

describe('-----Unit Tests for testing dashboard accounts table-----', () => {
  //// BECUASE OF BUG IN VITEST and JSDOM THIS TEST IS SKIPPED BY INTENSION
  test.skip('renders dashboard accounts  component with first page account details', async () => {
    const { getByRole, getByLabelText } = renderWithProviders(
      <DashboardAccounts />
    );
    const table = getByRole('table');
    expect(table).toBeInTheDocument();
    const firstNameInputElement = getByLabelText(/First Name/i);
    const lastNameInputElement = getByLabelText(/Last name/i);
    const emailInputElement = getByLabelText(/Email/i);

    expect(firstNameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();

    // screen.logTestingPlaygroundURL();
  });
  //// BECUASE OF BUG IN VITEST and JSDOM THIS TEST IS SKIPPED BY INTENSION
  test.skip('renders dashboard accounts  component with second page account details', async () => {
    const { getByRole, getByText, getByTestId } = renderWithProviders(
      <DashboardAccounts />
    );
    // screen.logTestingPlaygroundURL();

    const table = getByRole('table');
    expect(table).toBeInTheDocument();

    const nextPageButton = getByTestId('next-page-pagination-btn');
    const nextPageButtonSpy = vi.spyOn(nextPageButton, 'click');
    await act(async () => {
      fireEvent.click(nextPageButton);
    });

    expect(nextPageButtonSpy).toHaveBeenCalledTimes(1);
    expect(
      getByText(/page2@gmailsgklsghlsahg.com/i)
    ).toBeInTheDocument();
  });
});
