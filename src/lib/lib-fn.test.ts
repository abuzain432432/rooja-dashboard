import {
  CURRENCY_UNIT,
  formateAccountsRawData,
  formatePurchasesData,
  formateRawFeesData,
  formateWithdrawalsData,
  formateFundingsData,
} from './lib-fn';
import {
  accountDummyData,
  feesDummyData,
  fundingsDummyData,
  purchasesDummyData,
  withdrawalsDummyData,
} from '../../mocks/unit-test-data';
import {
  DashboardAccountsFilterType,
  DashboardFeesFilterType,
  DashboardFundingsFilterType,
  DashboardPurchasesFilterType,
  DashboardWithdrawalsFilterType,
} from '../types/types';

describe("-----Unit tests for the Formating the accounts on dashboard overview page's-----", () => {
  test('Formate accounts data  when user want to view the tatal accounts details', () => {
    const filter: DashboardAccountsFilterType = 'accounts';
    const result = formateAccountsRawData(accountDummyData, filter);
    expect(result).toEqual([
      {
        name: 'Blocked Accounts',
        value: 3,
        fill: '#e66d00',
        text: 'blocked',
      },
      {
        text: 'active',
        name: 'Active Accounts',
        value: 8,
        fill: '#15803d',
      },
      {
        name: 'Pending Accounts',
        text: 'pending',
        value: 0,
        fill: '#c89a4b',
      },
      {
        name: 'Deleted Accounts',
        text: 'deleted',
        value: 1,
        fill: '#d11a1a',
      },
    ]);
  });
  test('Formate accounts data  when user want to view only today accounts details', () => {
    const filter: DashboardAccountsFilterType = 'today';
    const result = formateAccountsRawData(accountDummyData, filter);
    expect(result).toEqual([
      {
        name: 'Blocked Accounts',
        value: 19,
        fill: '#e66d00',
        text: 'blocked',
      },
      {
        text: 'active',
        name: 'Active Accounts',
        value: 11,
        fill: '#15803d',
      },
      {
        name: 'Pending Accounts',
        text: 'pending',
        value: 78,
        fill: '#c89a4b',
      },
      {
        name: 'Deleted Accounts',
        text: 'deleted',
        value: 90,
        fill: '#d11a1a',
      },
    ]);
  });
  test('Formate accounts data  when user want to view only this month accounts details', () => {
    const filter: DashboardAccountsFilterType = 'month';
    const result = formateAccountsRawData(accountDummyData, filter);
    expect(result).toEqual([
      {
        name: 'Blocked Accounts',
        value: 8,
        fill: '#e66d00',
        text: 'blocked',
      },
      {
        text: 'active',
        name: 'Active Accounts',
        value: 17,
        fill: '#15803d',
      },
      {
        name: 'Pending Accounts',
        text: 'pending',
        value: 34,
        fill: '#c89a4b',
      },
      {
        name: 'Deleted Accounts',
        text: 'deleted',
        value: 45,
        fill: '#d11a1a',
      },
    ]);
  });
  test('Formate accounts data  when user want to view only this year accounts details', () => {
    const filter: DashboardAccountsFilterType = 'year';
    const result = formateAccountsRawData(accountDummyData, filter);
    expect(result).toEqual([
      {
        name: 'Blocked Accounts',
        value: 387,
        fill: '#e66d00',
        text: 'blocked',
      },
      {
        text: 'active',
        name: 'Active Accounts',
        value: 8765,
        fill: '#15803d',
      },
      {
        name: 'Pending Accounts',
        text: 'pending',
        value: 100,
        fill: '#c89a4b',
      },
      {
        name: 'Deleted Accounts',
        text: 'deleted',
        value: 189,
        fill: '#d11a1a',
      },
    ]);
  });
});

describe('-----Unit tests for the Formating fees on the dashboard overview page-----', () => {
  test('Formate fees data  when user want to view  total fees details', () => {
    const filter: DashboardFeesFilterType = 'fees';
    const result = formateRawFeesData(feesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'purchase_service',
        name: 'Purchases Fees',
        value: 62896 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'withdrawal_service',
        name: 'Withdrawal Fees',
        value: 90770 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'funding_gateway',
        name: 'Funding Fees',
        value: 10 / CURRENCY_UNIT,
        fill: '#e66d00',
      },
      {
        name: 'Withdrawal GW Fees',
        identifier: 'withdrawal_gateway',
        value: 8980 / CURRENCY_UNIT,
        fill: '#2d7d40',
      },
    ]);
  });
  test('Formate fees data  when user want to view only this month fees details', () => {
    const filter: DashboardFeesFilterType = 'month';
    const result = formateRawFeesData(feesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'purchase_service',
        name: 'Purchases Fees',
        value: 706786876 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'withdrawal_service',
        name: 'Withdrawal Fees',
        value: 798730 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'funding_gateway',
        name: 'Funding Fees',
        value: 7865875 / CURRENCY_UNIT,
        fill: '#e66d00',
      },
      {
        name: 'Withdrawal GW Fees',
        identifier: 'withdrawal_gateway',
        value: 90709751 / CURRENCY_UNIT,
        fill: '#2d7d40',
      },
    ]);
  });
  test('Formate fees data  when user want to view only this year fees details', () => {
    const filter: DashboardFeesFilterType = 'year';
    const result = formateRawFeesData(feesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'purchase_service',
        name: 'Purchases Fees',
        value: 1080795870 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'withdrawal_service',
        name: 'Withdrawal Fees',
        value: 2301080795870 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'funding_gateway',
        name: 'Funding Fees',
        value: 789730 / CURRENCY_UNIT,
        fill: '#e66d00',
      },
      {
        name: 'Withdrawal GW Fees',
        identifier: 'withdrawal_gateway',
        value: 12301080795870 / CURRENCY_UNIT,
        fill: '#2d7d40',
      },
    ]);
  });
  test('Formate fees data  when user want to view only today fees details', () => {
    const filter: DashboardFeesFilterType = 'today';
    const result = formateRawFeesData(feesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'purchase_service',
        name: 'Purchases Fees',
        value: 907690 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'withdrawal_service',
        name: 'Withdrawal Fees',
        value: 780 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'funding_gateway',
        name: 'Funding Fees',
        value: 10807958700 / CURRENCY_UNIT,
        fill: '#e66d00',
      },
      {
        name: 'Withdrawal GW Fees',
        identifier: 'withdrawal_gateway',
        value: 980 / CURRENCY_UNIT,
        fill: '#2d7d40',
      },
    ]);
  });
});

describe('-----Unit tests for the Formating Withdrawals on the dashboard overview page-----', () => {
  test('Formate Withdrawals data  when user want to view total Withdrawals details', () => {
    const filter: DashboardWithdrawalsFilterType = 'withdrawals';
    const result = formateWithdrawalsData(
      withdrawalsDummyData,
      filter
    );
    expect(result).toEqual([
      {
        identifier: 'success_withdrawals',
        name: 'Successfull Withdrawals',
        value: 12221073 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'failed_withdrawals',
        name: 'Failed Withdrawals',
        value: 968680 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_withdrawals',
        name: 'Pending Withdrawals',
        value: 2500000 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
    ]);
  });

  test('Formate Withdrawals data  when user want to view only this year Withdrawals details', () => {
    const filter: DashboardWithdrawalsFilterType = 'year';
    const result = formateWithdrawalsData(
      withdrawalsDummyData,
      filter
    );
    expect(result).toEqual([
      {
        identifier: 'success_withdrawals',
        name: 'Successfull Withdrawals',
        value: 12221073 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'failed_withdrawals',
        name: 'Failed Withdrawals',
        value: 89098 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_withdrawals',
        name: 'Pending Withdrawals',
        value: 2500000 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
    ]);
  });

  test('Formate Withdrawals data  when user want to view only this month Withdrawals details', () => {
    const filter: DashboardWithdrawalsFilterType = 'month';
    const result = formateWithdrawalsData(
      withdrawalsDummyData,
      filter
    );
    expect(result).toEqual([
      {
        identifier: 'success_withdrawals',
        name: 'Successfull Withdrawals',
        value: 1097000970 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'failed_withdrawals',
        name: 'Failed Withdrawals',
        value: 97000 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_withdrawals',
        name: 'Pending Withdrawals',
        value: 1097000 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
    ]);
  });

  test('Formate Withdrawals data  when user want to view only today Withdrawals details', () => {
    const filter: DashboardWithdrawalsFilterType = 'today';
    const result = formateWithdrawalsData(
      withdrawalsDummyData,
      filter
    );
    expect(result).toEqual([
      {
        identifier: 'success_withdrawals',
        name: 'Successfull Withdrawals',
        value: 2150215009700 / CURRENCY_UNIT,
        fill: '#15803d',
      },
      {
        identifier: 'failed_withdrawals',
        name: 'Failed Withdrawals',
        value: 2150 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_withdrawals',
        name: 'Pending Withdrawals',
        value: 215021500 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
    ]);
  });
});

describe('-----Unit tests for the Formating purchases on the dashboard overview page-----', () => {
  test('Formate purchases data  when user want to view total purchases details', () => {
    const filter: DashboardPurchasesFilterType = 'purchases';
    const result = formatePurchasesData(purchasesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'pending_purchases',
        name: 'Pending Purchases',
        value: 89896890 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'failed_purchases',
        name: 'Failed Purchases',
        value: 89650 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'success_purchases',
        name: 'Success Purchases',
        value: 14986814 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate purchases data  when user want to view ony this year purchases details', () => {
    const filter: DashboardPurchasesFilterType = 'year';
    const result = formatePurchasesData(purchasesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'pending_purchases',
        name: 'Pending Purchases',
        value: 1512500 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'failed_purchases',
        name: 'Failed Purchases',
        value: 151250 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'success_purchases',
        name: 'Success Purchases',
        value: 14986814 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate purchases data  when user want to view ony this month purchases details', () => {
    const filter: DashboardPurchasesFilterType = 'month';
    const result = formatePurchasesData(purchasesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'pending_purchases',
        name: 'Pending Purchases',
        value: 9014986814 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'failed_purchases',
        name: 'Failed Purchases',
        value: 9070 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'success_purchases',
        name: 'Success Purchases',
        value: 14986814 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate purchases data  when user want to view ony today purchases details', () => {
    const filter: DashboardPurchasesFilterType = 'today';
    const result = formatePurchasesData(purchasesDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'pending_purchases',
        name: 'Pending Purchases',
        value: 987600 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'failed_purchases',
        name: 'Failed Purchases',
        value: 98760 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'success_purchases',
        name: 'Success Purchases',
        value: 9876090 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });
});

describe('-----Unit tests for the Formating fundings on the dashboard overview page-----', () => {
  test('Formate fundings data  when user want to view total fundings details', () => {
    const filter: DashboardFundingsFilterType = 'fundings';
    const result = formateFundingsData(fundingsDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'expired_fundings',
        name: 'Expired Fundings',
        value: 8373000 / CURRENCY_UNIT,
        fill: '#a30000',
      },
      {
        identifier: 'failed_fundings',
        name: 'Failed Fundings',
        value: 837300001 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_fundings',
        name: 'Pending Fundings',
        value: 100000 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'success_fundings',
        name: 'Success Fundings',
        value: 28363900 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate fundings data  when user want to view only this year fundings details', () => {
    const filter: DashboardFundingsFilterType = 'year';
    const result = formateFundingsData(fundingsDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'expired_fundings',
        name: 'Expired Fundings',
        value: 8373000 / CURRENCY_UNIT,
        fill: '#a30000',
      },
      {
        identifier: 'failed_fundings',
        name: 'Failed Fundings',
        value: 108373000 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_fundings',
        name: 'Pending Fundings',
        value: 100000 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'success_fundings',
        name: 'Success Fundings',
        value: 28363900 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate fundings data  when user want to view only this month fundings details', () => {
    const filter: DashboardFundingsFilterType = 'month';
    const result = formateFundingsData(fundingsDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'expired_fundings',
        name: 'Expired Fundings',
        value: 12340 / CURRENCY_UNIT,
        fill: '#a30000',
      },
      {
        identifier: 'failed_fundings',
        name: 'Failed Fundings',
        value: 1083730000 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_fundings',
        name: 'Pending Fundings',
        value: 10837300090 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'success_fundings',
        name: 'Success Fundings',
        value: 1083730020 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });

  test('Formate fundings data  when user want to view only this month fundings details', () => {
    const filter: DashboardFundingsFilterType = 'today';
    const result = formateFundingsData(fundingsDummyData, filter);
    expect(result).toEqual([
      {
        identifier: 'expired_fundings',
        name: 'Expired Fundings',
        value: 780 / CURRENCY_UNIT,
        fill: '#a30000',
      },
      {
        identifier: 'failed_fundings',
        name: 'Failed Fundings',
        value: 7800 / CURRENCY_UNIT,
        fill: '#d11a1a',
      },
      {
        identifier: 'pending_fundings',
        name: 'Pending Fundings',
        value: 980 / CURRENCY_UNIT,
        fill: '#c89a4b',
      },
      {
        identifier: 'success_fundings',
        name: 'Success Fundings',
        value: 9800 / CURRENCY_UNIT,
        fill: '#15803d',
      },
    ]);
  });
});
