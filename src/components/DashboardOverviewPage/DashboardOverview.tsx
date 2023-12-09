import { useSelector } from 'react-redux';
import DashboardBarChart from './DashboardBarChart';
import { getUserDashboardDataSlice } from '../../store/storeSlices/userAuthSlice';
import { useState } from 'react';
import {
  formateFundingsData,
  formatePurchasesData,
  formateAccountsRawData,
  formateRawFeesData,
  formateWithdrawalsData,
} from '../../lib/lib-fn';

import {
  DashboardAccountsFilterType,
  DashboardFeesFilterType,
  DashboardFundingsFilterType,
  DashboardPurchasesFilterType,
  DashboardWithdrawalsFilterType,
} from '../../types/types';
import RoundedSelecte from '../ui/RoundedSelecte';

export default function DashboardOverview() {
  const userDashboardData = useSelector(getUserDashboardDataSlice);
  const [accountsFilter, setAccountsFilter] =
    useState<DashboardAccountsFilterType>('accounts');

  const [feesFilter, setFeesFilter] =
    useState<DashboardFeesFilterType>('fees');

  const [withdrawalsFilter, setWithdrawalsFilter] =
    useState<DashboardWithdrawalsFilterType>('withdrawals');

  const [purchasesFilter, setPurchasesFilter] =
    useState<DashboardPurchasesFilterType>('purchases');

  const [fundingsFilter, setFundingsFilter] =
    useState<DashboardFundingsFilterType>('fundings');

  const handleAccountFilterChange = (
    value: DashboardAccountsFilterType
  ) => {
    setAccountsFilter(value);
  };

  const handleFeesFilterChange = (value: DashboardFeesFilterType) => {
    setFeesFilter(value);
  };
  const handleWithdrawalsFilterChange = (
    value: DashboardWithdrawalsFilterType
  ) => {
    setWithdrawalsFilter(value);
  };
  const handlePurchasesFilterChange = (
    value: DashboardPurchasesFilterType
  ) => {
    setPurchasesFilter(value);
  };
  const handleFundingsFilterChange = (
    value: DashboardFundingsFilterType
  ) => {
    setFundingsFilter(value);
  };

  const accountsData = formateAccountsRawData(
    userDashboardData.accounts!,
    accountsFilter
  );
  const feesData = formateRawFeesData(
    userDashboardData.fees!,
    feesFilter
  );
  const fundingsData = formateFundingsData(
    userDashboardData!.fundings!,
    fundingsFilter
  );
  const purchasesData = formatePurchasesData(
    userDashboardData!.purchases!,
    purchasesFilter
  );
  const withdrawalsData = formateWithdrawalsData(
    userDashboardData!.withdrawals!,
    withdrawalsFilter
  );
  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className='grid grid-cols-2 2xl:gap-10 xl:gap-6 lg:gap-4 gap-3 '>
        <div className='bg-white  2xl:p-8 xl:p-5 lg:p-3 shadow-lg rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='font-bold 2xl:text-2xl lg:text-xl text-black'>
              Accounts Details
            </h2>
            <RoundedSelecte
              onChange={handleAccountFilterChange}
              value={accountsFilter}
              data={[
                { label: 'Total', value: 'accounts' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
                { label: 'Today', value: 'today' },
              ]}
            />
          </div>
          <DashboardBarChart currency={false} data={accountsData} />
        </div>
        <div className='bg-white  2xl:p-8 xl:p-5 lg:p-3 shadow-lg rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='font-bold  2xl:text-2xl lg:text-xl text-black'>
              Withdrawals Details
            </h2>
            <RoundedSelecte
              onChange={handleWithdrawalsFilterChange}
              value={withdrawalsFilter}
              data={[
                { label: 'Total', value: 'withdrawals' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
                { label: 'Today', value: 'today' },
              ]}
            />
          </div>

          <DashboardBarChart width={700} data={withdrawalsData} />
        </div>
        <div className='bg-white  2xl:p-8 xl:p-5 lg:p-3 shadow-lg rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='font-bold  2xl:text-2xl lg:text-xl text-black'>
              Fees Details
            </h2>
            <RoundedSelecte
              onChange={handleFeesFilterChange}
              value={feesFilter}
              data={[
                { label: 'Total', value: 'fees' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
                { label: 'Today', value: 'today' },
              ]}
            />
          </div>
          <DashboardBarChart data={feesData} />
        </div>

        <div className='bg-white  2xl:p-8 xl:p-5 lg:p-3 shadow-lg rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='font-bold  2xl:text-2xl lg:text-xl text-black'>
              Purchases Details
            </h2>
            <RoundedSelecte
              value={purchasesFilter}
              onChange={handlePurchasesFilterChange}
              data={[
                { label: 'Total', value: 'purchases' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
                { label: 'Today', value: 'today' },
              ]}
            />
          </div>
          <DashboardBarChart data={purchasesData} />
        </div>

        <div className='bg-white  2xl:p-8 xl:p-5 lg:p-3 shadow-lg rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='font-bold  2xl:text-2xl lg:text-xl text-black'>
              Fundings Details
            </h2>
            <RoundedSelecte
              value={fundingsFilter}
              onChange={handleFundingsFilterChange}
              data={[
                { label: 'Total', value: 'fundings' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
                { label: 'Today', value: 'today' },
              ]}
            />
          </div>

          <DashboardBarChart data={fundingsData} />
        </div>
      </div>
    </div>
  );
}
