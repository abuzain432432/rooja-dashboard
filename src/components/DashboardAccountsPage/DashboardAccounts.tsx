/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
  useGetAccountsQuery,
  useLazyGetSingalAccountDataQuery,
} from '../../store/apis/accountApis.ts';
import CustomButton from '../ui/CutomButton.tsx';
import CustomPagination from '../ui/CustomPagination.tsx';

import { Col, Form, Input, Row, Table } from 'antd';
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
const searchedQueryDataInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};
function DashboardAccounts() {
  const [page, setPage] = useState(1);
  const [searchedQueryData, setSearchedQueryData] = useState({
    ...searchedQueryDataInitialValues,
  });
  const { isFetching, data, error } = useGetAccountsQuery({
    page,
    ...searchedQueryData,
  });
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
      setPage(data?.next_page as number);
    }
  };
  const hasNextPage = data?.next_page !== -1;
  const hasPreviousPage = page > 1;
  const handleSearchFormSubmit = (formData: any) => {
    setPage(1);

    setSearchedQueryData({ ...formData });
  };
  const handleResetBtnClick = () => {
    setPage(1);
    setSearchedQueryData({ ...searchedQueryDataInitialValues });
  };
  return (
    <div className='bg-gray-200 min-h-[calc(100vh-70px)] 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 w-full'>
      <div className='bg-white mb-6 py-3 px-5 rounded-lg'>
        <Form layout='vertical' onFinish={handleSearchFormSubmit}>
          <Row gutter={14} className='mb-2'>
            <Col span={5}>
              <Form.Item
                style={{ margin: 0 }}
                label={'First Name'}
                name={'firstName'}
              >
                <Input
                  placeholder='Search by first name'
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                style={{ margin: 0 }}
                label={'Last name'}
                name={'lastName'}
              >
                <Input
                  placeholder='Search by last name'
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                style={{ margin: 0 }}
                label={'Email'}
                name={'email'}
              >
                <Input placeholder='Search by email' size='large' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                style={{ margin: 0 }}
                label={'Phone Number'}
                name={'phone'}
              >
                <Input
                  placeholder='Search by phone number'
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col
              span={3}
              className='gap-10 items-end justify-end flex w-full'
            >
              <div className='flex justify-end gap-3 '>
                <div>
                  <CustomButton htmlType='submit'>
                    Search
                  </CustomButton>
                </div>
                <div>
                  <CustomButton
                    onClick={handleResetBtnClick}
                    htmlType='reset'
                    theme='gray'
                  >
                    Reset
                  </CustomButton>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div className=' gap-10 bg-white rounded-lg overflow-hidden'>
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
