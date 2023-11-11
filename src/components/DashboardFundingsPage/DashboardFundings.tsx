/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFundingsQuery } from '../../store/apis/fundingsApis';
import { useState, useEffect } from 'react';
import CustomPagination from '../ui/CustomPagination';
import { Table } from 'antd';
import { FundingsType, UserType } from '../../types/types';
import toast from 'react-hot-toast';
import moment from 'moment';
import CustomButton from '../ui/CutomButton';
import { MdOutlineViewInAr } from 'react-icons/md';
import DashboardSingalFundingDetails from './DashboardSingalFundingDetails';
export default function DashboardFundings() {
  const [page, setPage] = useState(1);
  const [fundingsDetails, setFundingsDetails] =
    useState<null | FundingsType>(null);

  const { isFetching, data, error } = useGetFundingsQuery({
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
            <div>{accont?.first_name}</div>
            <div>{accont?.last_name}</div>
          </div>
        );
      },
    },

    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number, row: FundingsType) => {
        return <div>{(balance / row.currency_unit).toFixed(2)}</div>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
      title: 'Account Name',
      dataIndex: 'dynamic_virtual_account_info',
      key: 'id',
      render: (data: any) => {
        return <div>{data.account_name} </div>;
      },
    },

    {
      title: 'Expected Amount',
      dataIndex: 'dynamic_virtual_account_info',
      key: 'id',
      render: (data: any) => {
        return <div>{data.expected_amount} </div>;
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, record: FundingsType) => {
        return (
          <CustomButton
            icon={<MdOutlineViewInAr />}
            onClick={() => setFundingsDetails(record)}
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
      setPage(data!.next_page!);
    }
  };
  const hasNextPage = data?.next_page !== -1;
  const hasPreviousPage = page > 1;

  console.log(data);
  const handleFundingDrawerClose = () => {
    setFundingsDetails(null);
  };
  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className=' gap-10 bg-white'>
        <Table
          scroll={{ x: 1600 }}
          loading={isFetching}
          pagination={false}
          dataSource={data?.fundings}
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
      <DashboardSingalFundingDetails
        fundingsDetails={fundingsDetails}
        onClose={handleFundingDrawerClose}
      />
    </div>
  );
}