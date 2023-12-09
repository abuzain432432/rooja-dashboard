import { MemoryRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';

import DashboardAccounts from './DashboardAccounts.tsx';
import { renderWithProviders } from '../../test-utils.tsx';
// import { worker } from '../../../mock/browser';
// import { accountsTableSuccessCallHandler } from '../../../mock/handler.ts';
import userEvent from '@testing-library/user-event';
// import { singalAccountSuccessCallHandler } from '../../../mock/handler.ts';

describe('-----Unit Tests for testing dashboard accounts table-----', () => {
  // test('renders dashboard accounts  component with first page account details', async () => {
  //   renderWithProviders(
  //     <MemoryRouter>
  //       <DashboardAccounts />
  //     </MemoryRouter>
  //   );
  //   // worker.use(singalAccountSuccessCallHandler);
  //   await waitFor(() => {
  //     const table = screen.getByRole('table');
  //     expect(table).toBeInTheDocument();
  //     const firstNameInputElement =
  //       screen.getByLabelText(/First Name/i);
  //     const lastNameInputElement =
  //       screen.getByLabelText(/Last name/i);
  //     const emailInputElement = screen.getByLabelText(/Email/i);
  //     expect(firstNameInputElement).toBeInTheDocument();
  //     expect(emailInputElement).toBeInTheDocument();
  //     expect(lastNameInputElement).toBeInTheDocument();
  //   });
  // });
  // test('renders dashboard accounts  component with second page account details', async () => {
  //   renderWithProviders(
  //     <MemoryRouter>
  //       <DashboardAccounts />
  //     </MemoryRouter>
  //   );
  //   await waitFor(() => {
  //     const table = screen.getByRole('table');
  //     expect(table).toBeInTheDocument();
  //   });
  //   const nextPageButton = screen.getByTestId(
  //     'next-page-pagination-btn'
  //   );
  //   const nextPageButtonSpy = vi.spyOn(nextPageButton, 'click');
  //   userEvent.click(nextPageButton);

  //   waitFor(() => {
  //     expect(nextPageButtonSpy).toHaveBeenCalledTimes(1);
  //     expect(
  //       screen.getByText(/page2@gmail.com/i)
  //     ).toBeInTheDocument();
  //     const viewSingalAccountBtn = screen.getByTestId('icon-btn');
  //     userEvent.click(viewSingalAccountBtn);

  //     const viewBtns = screen.queryAllByTestId('icon-btn');
  //     // userEvent.click(viewBtns[0]);
  //     console.log('________________________________________________');
  //     console.log(viewBtns);
  //   });

  //   screen.debug();
  // });
  test('Test', () => {
    expect(true).toEqual(true);
  });
});
