/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardNewAdmin from './DashboardNewAdmin';

import { setupStore } from '../../store/store.ts';

import {
  fireEvent,
  render as renderWithProviders,
  screen,
  act,
  waitFor,
} from '../../../utils/test-utils';

describe('-----Unit Test for testing New Admin Component-----', async () => {
  test('renders New Admin  component with all input fields', async () => {
    const { getByLabelText } = renderWithProviders(
      <DashboardNewAdmin />
    );
    const titleInputElement = getByLabelText(/Title/i);
    const phoneNumberInputElement = getByLabelText(/Phone Number/i);
    const firstNameInputElement = getByLabelText(/First Name/i);
    const lastNameInputElement = getByLabelText(/Last Name/i);

    const emailInputElement = getByLabelText(/Email/i);
    const passwordInputElement = getByLabelText(/Password/i);
    const languageInputElement = getByLabelText(/Language/i);
    const roleInputElement = getByLabelText(/Role/i);

    expect(titleInputElement).toBeInTheDocument();
    expect(phoneNumberInputElement).toBeInTheDocument();
    expect(firstNameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();
    expect(languageInputElement).toBeDisabled();
    expect(roleInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  test('renders New Admin  component and show error when submit with empty fields ', async () => {
    const { getByLabelText, getByText, getAllByText } =
      renderWithProviders(<DashboardNewAdmin />);
    const titleInputElement = getByLabelText(/Title/i);
    const phoneNumberInputElement = getByLabelText(/Phone Number/i);
    const firstNameInputElement = getByLabelText(/First Name/i);
    const lastNameInputElement = getByLabelText(/Last Name/i);
    const emailInputElement = getByLabelText(/Email/i);
    const passwordInputElement = getByLabelText(/Password/i);
    const languageInputElement = getByLabelText(/Language/i);
    const roleInputElement = getByLabelText(/Role/i);
    const createButton = getByText(/create/i);
    act(() => {
      fireEvent.click(createButton);
    });

    await waitFor(() => {
      const errorsMessageElements = getAllByText(
        /This field is required/i
      );
      expect(errorsMessageElements.length).toEqual(7);
    });
    expect(titleInputElement).toBeInTheDocument();
    expect(phoneNumberInputElement).toBeInTheDocument();
    expect(firstNameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();
    expect(languageInputElement).toBeDisabled();
    expect(roleInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
  });
});
