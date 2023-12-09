import {
  OverviewAccountsDetailsType,
  BarChartType,
  DashboardAccountsFilterType,
  DashboardFeesFilterType,
  DashboardFundingsFilterType,
  DashboardPurchasesFilterType,
  DashboardWithdrawalsFilterType,
  OverviewFeesDetailsType,
  OverviewFundingsDetailsType,
  OverviewPurchaseDetailsType,
  OverviewWithdrawalsDetailsType,
} from '../types/types';

export const CURRENCY_UNIT = 100;

const formateAccountsRawData = (
  rawData: OverviewAccountsDetailsType,
  filter: DashboardAccountsFilterType
) => {
  const results: {
    name: string;
    text: BarChartType;
    value: null | number | string;
    fill?: string;
  }[] = [
    {
      name: 'Blocked Accounts',
      value: null,
      fill: '#e66d00',
      text: 'blocked',
    },
    {
      text: 'active',
      name: 'Active Accounts',
      value: null,
      fill: '#15803d',
    },
    {
      name: 'Pending Accounts',
      text: 'pending',
      value: null,
      fill: '#c89a4b',
    },
    {
      name: 'Deleted Accounts',
      text: 'deleted',
      value: null,
      fill: '#d11a1a',
    },
  ];

  for (const data in rawData) {
    if (data.endsWith(filter as string)) {
      if (data.includes('active')) {
        const activeAccountData = results.find(
          item => item.text === 'active'
        );
        activeAccountData!.value = +rawData[data];
      } else if (data.includes('pending')) {
        const pendingAccountData = results.find(
          item => item.text === 'pending'
        );
        pendingAccountData!.value = +rawData[data];
      } else if (data.includes('deleted')) {
        const deletedAccountData = results.find(
          item => item.text === 'deleted'
        );
        deletedAccountData!.value = +rawData[data];
      } else if (data.includes('blocked')) {
        {
          const blockedAccountData = results.find(
            item => item.text === 'blocked'
          );
          blockedAccountData!.value = +rawData[data];
        }
      }
    }
  }

  return results;
};

const formateRawFeesData = (
  rawData: OverviewFeesDetailsType,
  filter: DashboardFeesFilterType
) => {
  const results: {
    identifier:
      | 'purchase_service'
      | 'withdrawal_service'
      | 'funding_gateway'
      | 'withdrawal_gateway';
    value: null | number;

    name: string;
    fill: string;
  }[] = [
    {
      identifier: 'purchase_service',
      name: 'Purchases Fees',
      value: null,
      fill: '#15803d',
    },
    {
      identifier: 'withdrawal_service',
      name: 'Withdrawal Fees',
      value: null,
      fill: '#c89a4b',
    },
    {
      identifier: 'funding_gateway',
      name: 'Funding Fees',
      value: null,
      fill: '#e66d00',
    },
    {
      name: 'Withdrawal GW Fees',
      identifier: 'withdrawal_gateway',
      value: null,
      fill: '#2d7d40',
    },
  ];

  for (const data in rawData) {
    if (data.endsWith(filter)) {
      if (data.includes('purchase_service')) {
        const activeAccountData = results.find(
          item => item.identifier === 'purchase_service'
        );
        activeAccountData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('withdrawal_service')) {
        const pendingAccountData = results.find(
          item => item.identifier === 'withdrawal_service'
        );
        pendingAccountData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('funding_gateway')) {
        const deletedAccountData = results.find(
          item => item.identifier === 'funding_gateway'
        );
        deletedAccountData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('withdrawal_gateway')) {
        {
          const blockedAccountData = results.find(
            item => item.identifier === 'withdrawal_gateway'
          );
          blockedAccountData!.value = +rawData[data] / CURRENCY_UNIT;
        }
      }
    }
  }

  return results;
};

const formateWithdrawalsData = (
  rawData: OverviewWithdrawalsDetailsType,
  filter: DashboardWithdrawalsFilterType
) => {
  const results: {
    identifier:
      | 'success_withdrawals'
      | 'failed_withdrawals'
      | 'pending_withdrawals';
    value: null | number;
    name: string;
    fill: string;
  }[] = [
    {
      identifier: 'success_withdrawals',
      name: 'Successfull Withdrawals',
      value: null,
      fill: '#15803d',
    },
    {
      identifier: 'failed_withdrawals',
      name: 'Failed Withdrawals',
      value: null,
      fill: '#d11a1a',
    },
    {
      identifier: 'pending_withdrawals',
      name: 'Pending Withdrawals',
      value: null,
      fill: '#c89a4b',
    },
  ];

  for (const data in rawData) {
    if (data.endsWith(filter)) {
      if (data.includes('success_withdrawals')) {
        const successWithdrawals = results.find(
          item => item.identifier === 'success_withdrawals'
        );
        successWithdrawals!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('failed_withdrawals')) {
        const failedWithdrawals = results.find(
          item => item.identifier === 'failed_withdrawals'
        );
        failedWithdrawals!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('pending_withdrawals')) {
        const deletedAccountData = results.find(
          item => item.identifier === 'pending_withdrawals'
        );
        deletedAccountData!.value = +rawData[data] / CURRENCY_UNIT;
      }
    }
  }
  return results;
};
const formatePurchasesData = (
  rawData: OverviewPurchaseDetailsType,
  filter: DashboardPurchasesFilterType
) => {
  const results: {
    identifier:
      | 'success_purchases'
      | 'failed_purchases'
      | 'pending_purchases';
    value: null | number;
    fill: string;
    name: string;
  }[] = [
    {
      identifier: 'pending_purchases',
      name: 'Pending Purchases',
      value: null,
      fill: '#c89a4b',
    },
    {
      identifier: 'failed_purchases',
      name: 'Failed Purchases',
      value: null,
      fill: '#d11a1a',
    },
    {
      identifier: 'success_purchases',
      name: 'Success Purchases',
      value: null,
      fill: '#15803d',
    },
  ];

  for (const data in rawData) {
    if (data.endsWith(filter)) {
      if (data.includes('pending_purchases')) {
        const pendingPurchases = results.find(
          item => item.identifier === 'pending_purchases'
        );
        pendingPurchases!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('failed_purchases')) {
        const failedPurchasesData = results.find(
          item => item.identifier === 'failed_purchases'
        );
        failedPurchasesData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('success_purchases')) {
        const successPurchasesData = results.find(
          item => item.identifier === 'success_purchases'
        );
        successPurchasesData!.value = +rawData[data] / CURRENCY_UNIT;
      }
    }
  }
  return results;
};

const formateFundingsData = (
  rawData: OverviewFundingsDetailsType,
  filter: DashboardFundingsFilterType
) => {
  const results: {
    identifier:
      | 'success_fundings'
      | 'failed_fundings'
      | 'pending_fundings'
      | 'expired_fundings';
    value: null | number;
    name: string;
    fill: string;
  }[] = [
    {
      identifier: 'expired_fundings',
      name: 'Expired Fundings',
      value: null,
      fill: '#a30000',
    },
    {
      identifier: 'failed_fundings',
      name: 'Failed Fundings',
      value: null,
      fill: '#d11a1a',
    },
    {
      identifier: 'pending_fundings',
      name: 'Pending Fundings',
      value: null,
      fill: '#c89a4b',
    },
    {
      identifier: 'success_fundings',
      name: 'Success Fundings',
      value: null,
      fill: '#15803d',
    },
  ];

  for (const data in rawData) {
    if (data.endsWith(filter)) {
      if (data.includes('expired_fundings')) {
        const expiredFundingsData = results.find(
          item => item.identifier === 'expired_fundings'
        );
        expiredFundingsData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('pending_fundings')) {
        const pendingFundingsData = results.find(
          item => item.identifier === 'pending_fundings'
        );
        pendingFundingsData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('failed_fundings')) {
        const failedFundingsData = results.find(
          item => item.identifier === 'failed_fundings'
        );
        failedFundingsData!.value = +rawData[data] / CURRENCY_UNIT;
      } else if (data.includes('success_fundings')) {
        const successFundingsData = results.find(
          item => item.identifier === 'success_fundings'
        );
        successFundingsData!.value = +rawData[data] / CURRENCY_UNIT;
      }
    }
  }
  return results;
};

export {
  formateAccountsRawData,
  formateRawFeesData,
  formateWithdrawalsData,
  formatePurchasesData,
  formateFundingsData,
};
