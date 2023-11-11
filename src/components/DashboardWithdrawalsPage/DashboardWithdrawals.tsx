/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetWithdrawalsQuery } from '../../store/apis/withdrawalsApi';
import { useState, useEffect } from 'react';
import CustomPagination from '../ui/CustomPagination';
import { Table } from 'antd';
import { UserType, WithdrawalDetailsType } from '../../types/types';
import toast from 'react-hot-toast';
import moment from 'moment';
import CustomButton from '../ui/CutomButton';

import { MdOutlineViewInAr } from 'react-icons/md';
import DashboardWithdrawalsDetails from './DashboardSingalWithdrawalsDetails';
export default function DashboardWithdrawals() {
  const [page, setPage] = useState(1);
  const [withdrwalDetails, setWithdrawalDetails] =
    useState<null | WithdrawalDetailsType>(null);
  const { isFetching, data, error } = useGetWithdrawalsQuery({
    page,
  });

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'account',
      key: 'id',

      render: (accont: UserType) => {
        return (
          <div className='flex gap-2'>
            <div>{accont.first_name}</div>
            <div>{accont.last_name}</div>
          </div>
        );
      },
    },

    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number, row: any) => {
        return <div>{(balance / row.currency_unit).toFixed(2)}</div>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number, row: any) => {
        return <div>{(amount / row.currency_unit).toFixed(2)}</div>;
      },
    },

    {
      title: 'Tx Fee',
      dataIndex: 'tx_fee',
      key: 'tx_fee',
      render: (tx_fee: number, row: any) => {
        return <div>{(tx_fee / row.currency_unit).toFixed(2)}</div>;
      },
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => {
        return <div>{date && moment(date).format('MMM Do YY')}</div>;
      },
    },
    {
      title: 'Is Auto',
      dataIndex: 'is_auto',
      key: 'is_auto',
      render: (isAuto: boolean) => {
        return <div>{isAuto ? 'True' : 'False'}</div>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        console.log(status);

        return (
          <div
            className={` ${
              status === 'completed' && 'bg-green-500'
            } ${
              status === 'pending' && 'bg-gray-500'
            } py-2 text-center first-letter:uppercase text-white rounded-xl font-semibold w-[90px]`}
          >
            {status}
          </div>
        );
      },
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (_: number, row: WithdrawalDetailsType) => {
        return (
          <CustomButton
            icon={<MdOutlineViewInAr />}
            onClick={() => setWithdrawalDetails(row)}
          />
        );
      },
    },
  ];
  const handleBackBtnClick = () => {
    if (page > 1 && !isFetching) {
      setPage(preState => preState - 1);
    }
  };
  const handleNextBtnClick = () => {
    if (data?.next_page !== -1 && !isFetching) {
      setPage(data?.next_page);
    }
  };
  const handleWithdrawalDrawerClose = () => {
    setWithdrawalDetails(null);
  };
  const hasNextPage = data?.next_page !== -1;
  const hasPreviousPage = page > 1;
  console.log('with drawals');
  console.log(data?.withdrawals);
  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className=' gap-10 bg-white'>
        <Table
          scroll={{ x: 1400 }}
          loading={isFetching}
          pagination={false}
          dataSource={data?.withdrawals}
          columns={columns}
        />
        <CustomPagination
          loading={isFetching}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          onNextBtnClick={handleNextBtnClick}
          onBackBtnClick={handleBackBtnClick}
        />
      </div>
      <DashboardWithdrawalsDetails
        onClose={handleWithdrawalDrawerClose}
        withdrwalDetails={withdrwalDetails}
      />
    </div>
  );
}
