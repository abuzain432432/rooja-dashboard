import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { SingalAccountDetailsType } from '../../types/types.ts';

interface accountsStateType {
  loading: boolean;
  selectedAccountId: string | null;
  singalAccountDetails: SingalAccountDetailsType | null;
}
const initialState: accountsStateType = {
  loading: false,
  singalAccountDetails: null,
  selectedAccountId: null,
};

const accountsSlice = createSlice({
  name: 'accountsSlice',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setSingalAccountData: (state, action) => {
      state.singalAccountDetails = action.payload.accountData;
    },
    setSelectedAccountId: (state, action) => {
      state.selectedAccountId = action.payload.id;
    },
    clearSingalAccountData: state => {
      state.singalAccountDetails = null;
      state.selectedAccountId = null;
    },
  },
});
export const {
  setLoading,
  setSingalAccountData,
  clearSingalAccountData,
  setSelectedAccountId,
} = accountsSlice.actions;
export const getAccountsLoadingSlice = (state: RootState): boolean =>
  state.accounts.loading;
export const getSelectedAccountId = (state: RootState) =>
  state.accounts.selectedAccountId;
export const getSingalAccountSlice = (state: RootState) =>
  state.accounts.singalAccountDetails;
export default accountsSlice.reducer;
