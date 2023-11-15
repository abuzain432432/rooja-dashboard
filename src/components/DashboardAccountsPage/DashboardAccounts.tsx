import { useEffect, useState } from 'react';
import {
  useGetAccountsQuery,
  useLazyGetSingalAccountDataQuery,
} from '../../store/apis/accountApis.ts';
import CustomButton from '../ui/CutomButton.tsx';
import CustomPagination from '../ui/CustomPagination.tsx';

import { Table } from 'antd';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccountsLoadingSlice,
  getSelectedAccountId,
  setLoading,
  setSelectedAccountId,
  setSingalAccountData,
} from '../../store/storeSlices/accountsSlice.ts';
import DashboardSingalAccount from './DashboardSingalAccount.tsx';
import { MdOutlineViewInAr } from 'react-icons/md';
function DashboardAccounts() {
  const [page, setPage] = useState(1);
  const { isFetching, data, error } = useGetAccountsQuery({ page });
  const isSingalAccountLoading = useSelector(getAccountsLoadingSlice);
  const selectedAccountId = useSelector(getSelectedAccountId);
  const [getAccountsDetails, accountDetailsData] =
    useLazyGetSingalAccountDataQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  useEffect(() => {
    if (accountDetailsData?.data && !accountDetailsData.isFetching) {
      dispatch(
        setSingalAccountData({
          accountData: accountDetailsData?.data?.account,
        })
      );
    }
  }, [accountDetailsData, dispatch]);

  useEffect(() => {
    if (accountDetailsData.error) {
      toast.error('Something went wrong');
    }
  }, [accountDetailsData.error, dispatch]);

  useEffect(() => {
    dispatch(setLoading({ loading: accountDetailsData?.isFetching }));
  }, [accountDetailsData?.isFetching, dispatch]);

  const handleViewDetailsClick = (id: string) => {
    dispatch(setSelectedAccountId({ id }));
    getAccountsDetails(id);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      ellipsis: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email Verified',
      dataIndex: 'email_verified',
      key: 'email_verified',
      render(isVerified: boolean) {
        return (
          <div className={` `}>
            {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        );
      },
    },

    {
      title: 'Phone Verified',
      dataIndex: 'phone_verified',
      key: 'phone_verified',
      render(isVerified: boolean) {
        return (
          <div className={``}>
            {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      ellipsis: true,
      render: (status: string) => {
        return (
          <div
            className={`first-letter:uppercase ${
              (status === 'blocked' || status === 'deleted') &&
              'text-red-500'
            } ${status === 'active' && 'text-green-500'} ${
              status === 'pending' && 'text-gray-500'
            } py-2   rounded-xl font-semibold w-[80px]`}
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
      render: (id: string) => {
        return (
          <CustomButton
            icon={<MdOutlineViewInAr />}
            isLoading={
              isSingalAccountLoading && id === selectedAccountId
            }
            onClick={handleViewDetailsClick.bind(null, id)}
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
  const hasNextPage = data?.next_page !== -1;
  const hasPreviousPage = page > 1;

  return (
    <div className='bg-gray-200 min-h-[calc(100vh-70px)] 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 w-full'>
      <div className=' gap-10 bg-white'>
        <Table
          scroll={{ x: 1100 }}
          loading={isFetching}
          pagination={false}
          dataSource={data?.accounts}
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
      <DashboardSingalAccount />
    </div>
  );
}

export default DashboardAccounts;
