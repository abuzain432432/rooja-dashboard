import {
  superAdminAuthDummyData,
  regularAuthDummyData,
  supportAuthDummyData,
  salesAuthDummyData,
} from '../../../mocks/unit-test-data';
import { expect } from 'vitest';
import Sidebar from './Sidebar.tsx';
import {
  render as renderWithProviders,
  screen,
} from '../../../utils/test-utils';

describe('-----Unit Tests for testing dashboard accounts table-----', () => {
  test('renders side bar when role is super admin', async () => {
    const { getByText } = renderWithProviders(<Sidebar />, {
      preloadedState: {
        userAuth: { ...superAdminAuthDummyData },
      },
    });

    const overviewLinkElement = getByText(/Overview/i);
    const accountsLinkElement = getByText(/Accounts/i);
    const withdrawalsLinkElement = getByText(/withdrawals/i);
    const purchasesLinkElement = getByText(/Purchases/i);
    const productsLinkElement = getByText(/Products/i);
    const fundingsLinkElement = getByText(/Fundings/i);
    const settingsLinkElement = getByText(/Settings/i);
    const newAdminLinkElement = getByText(/New Admin/i);

    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(settingsLinkElement).toBeInTheDocument();
    expect(newAdminLinkElement).toBeInTheDocument();
  });
  test('renders side bar when user role is  regular', async () => {
    const { getByText, queryByText } = renderWithProviders(
      <Sidebar />,
      {
        preloadedState: {
          userAuth: { ...regularAuthDummyData },
        },
      }
    );

    const overviewLinkElement = getByText(/Overview/i);
    const accountsLinkElement = getByText(/Accounts/i);
    const withdrawalsLinkElement = queryByText(/withdrawals/i);
    const purchasesLinkElement = queryByText(/Purchases/i);
    const productsLinkElement = getByText(/Products/i);
    const fundingsLinkElement = queryByText(/Fundings/i);
    const settingsLinkElement = queryByText(/Settings/i);
    const newAdminLinkElement = queryByText(/New Admin/i);

    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();

    expect(fundingsLinkElement).toEqual(null);
    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);
    expect(withdrawalsLinkElement).toEqual(null);
    expect(purchasesLinkElement).toEqual(null);

    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });

  test('renders side bar when user role is  support', async () => {
    const { getByText, queryByText } = renderWithProviders(
      <Sidebar />,
      {
        preloadedState: {
          userAuth: { ...supportAuthDummyData },
        },
      }
    );

    const overviewLinkElement = getByText(/Overview/i);
    const accountsLinkElement = getByText(/Accounts/i);
    const withdrawalsLinkElement = queryByText(/withdrawals/i);
    const purchasesLinkElement = queryByText(/Purchases/i);
    const productsLinkElement = getByText(/Products/i);
    const fundingsLinkElement = queryByText(/Fundings/i);
    const settingsLinkElement = queryByText(/Settings/i);
    const newAdminLinkElement = queryByText(/New Admin/i);

    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();

    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);

    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });

  test('renders side bar when user role is  support', async () => {
    const { getByText, queryByText } = renderWithProviders(
      <Sidebar />,
      {
        preloadedState: {
          userAuth: { ...supportAuthDummyData },
        },
      }
    );

    const overviewLinkElement = getByText(/Overview/i);
    const accountsLinkElement = getByText(/Accounts/i);
    const withdrawalsLinkElement = queryByText(/withdrawals/i);
    const purchasesLinkElement = queryByText(/Purchases/i);
    const productsLinkElement = getByText(/Products/i);
    const fundingsLinkElement = queryByText(/Fundings/i);
    const settingsLinkElement = queryByText(/Settings/i);
    const newAdminLinkElement = queryByText(/New Admin/i);

    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();

    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);

    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });

  test('renders side bar when user role is  sale', async () => {
    const { getByText, queryByText } = renderWithProviders(
      <Sidebar />,
      {
        preloadedState: {
          userAuth: { ...salesAuthDummyData },
        },
      }
    );

    const overviewLinkElement = getByText(/Overview/i);
    const accountsLinkElement = getByText(/Accounts/i);
    const withdrawalsLinkElement = queryByText(/withdrawals/i);
    const purchasesLinkElement = queryByText(/Purchases/i);
    const productsLinkElement = getByText(/Products/i);
    const fundingsLinkElement = queryByText(/Fundings/i);
    const settingsLinkElement = queryByText(/Settings/i);
    const newAdminLinkElement = queryByText(/New Admin/i);

    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();

    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);

    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });
});
