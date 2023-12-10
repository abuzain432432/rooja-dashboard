import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import {
  OverviewAccountsDetailsType,
  OverviewFeesDetailsType,
  OverviewFundingsDetailsType,
  OverviewPurchaseDetailsType,
  UserType,
  OverviewWithdrawalsDetailsType,
} from '../../types/types.ts';

export interface userAuthSliceType {
  loading: boolean;
  appLoading: boolean;
  userData: { user: UserType; token: string } | null;
  dashboardData: {
    accounts: OverviewAccountsDetailsType | null;
    purchases: OverviewPurchaseDetailsType | null;
    fundings: OverviewFundingsDetailsType | null;
    withdrawals: OverviewWithdrawalsDetailsType | null;
    fees: OverviewFeesDetailsType | null;
  };
}
const initialState: userAuthSliceType = {
  loading: false,
  appLoading: true,
  userData: null,
  dashboardData: {
    accounts: null,
    purchases: null,
    fundings: null,
    withdrawals: null,
    fees: null,
  },
};

const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.dashboardData = action.payload.dashboardData;
      state.userData = action.payload.userData;
    },
    logout: () => {
      return { ...initialState };
    },
  },
});
export const { setUser, logout } = userAuthSlice.actions;
export const getAuthLoadingSlice = (state: RootState): boolean =>
  state.userAuth.loading;
export const getAppLoadingSlice = (state: RootState): boolean =>
  state.userAuth.appLoading;
export const getUserDetailsSlice = (state: RootState) =>
  state.userAuth.userData;

export const getUserDashboardDataSlice = (state: RootState) =>
  state.userAuth.dashboardData;
export default userAuthSlice.reducer;
