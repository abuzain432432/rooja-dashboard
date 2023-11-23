/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import CustomPagination from '../ui/CustomPagination.tsx';

import { Form, Input, Table } from 'antd';
import toast from 'react-hot-toast';
import { useGetPurchasesQuery } from '../../store/apis/purchasesApis.ts';
import {
  PerchagesDetailsType,
  ProductType,
  UserType,
} from '../../types/types.ts';
import DashboardSingalPurchaseDetails from './DashboardSingalPurchaseDetails.tsx';
import CustomButton from '../ui/CutomButton.tsx';
import { MdOutlineViewInAr } from 'react-icons/md';
function DashboardPurchases() {
  const [page, setPage] = useState(1);
  const [searchedAccountId, setSearchedAccountId] = useState('');
  const [purchaseDetails, setPurchaseDetails] =
    useState<null | PerchagesDetailsType>(null);
  const { isFetching, data, error } = useGetPurchasesQuery({
    page,
    searchedAccountId,
  });
  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  const columns = [
    {
      title: 'Buyer Name',
      dataIndex: 'buyer',
      key: 'id',
      render: (buyer: UserType) => {
        return (
          <div className='flex gap-1'>
            <span>{buyer.first_name}</span>
            <span>{buyer.last_name}</span>
          </div>
        );
      },
    },
    {
      title: 'Seller Name',
      dataIndex: 'seller',
      key: 'id',
      render: (seller: UserType) => {
        return (
          <div className='flex gap-1'>
            <span>{seller.first_name}</span>
            <span>{seller.last_name}</span>
          </div>
        );
      },
    },

    {
      title: 'Product',
      dataIndex: 'product',
      key: 'id',
      render: (seller: ProductType) => {
        return <div>{seller?.name}</div>;
      },
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number, row: PerchagesDetailsType) => {
        return (
          <div>
            N
            {new Intl.NumberFormat('en', {
              // style: 'currency',
              // currency: row?.currency || 'NGN',
            }).format(balance / row?.currency_unit)}
          </div>
        );
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number, row: PerchagesDetailsType) => {
        return (
          <div>
            N
            {new Intl.NumberFormat('en', {
              // style: 'currency',
              // currency: row?.currency || 'NGN',
            }).format(amount / row?.currency_unit)}
          </div>
        );
      },
    },
    {
      title: 'Seller Balance',
      dataIndex: 'seller_balance',
      key: 'seller_balance',
      render: (sellerBalance: number, row: PerchagesDetailsType) => {
        return (
          <div>
            N
            {new Intl.NumberFormat('en', {
              // style: 'currency',
              // currency: row?.currency || 'NGN',
            }).format(sellerBalance / row?.currency_unit)}
          </div>
        );
      },
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration: string) => {
        return <div>{duration} Sec</div>;
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
            className={`${status === 'failed' && 'text-red-500'} ${
              status === 'paid' && 'text-green-500'
            } ${
              status === 'pending' && 'text-gray-500'
            } py-2 text-center first-letter:uppercase  rounded-xl font-semibold w-[80px]`}
          >
            {status}
          </div>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, record: PerchagesDetailsType) => {
        return (
          <CustomButton
            icon={<MdOutlineViewInAr />}
            onClick={() => setPurchaseDetails(record)}
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
  const handlePurchaseDrawerClose = () => {
    setPurchaseDetails(null);
  };
  const handleSearchFormSubmit = (formData: any) => {
    setSearchedAccountId(formData.searchedAccount);
    setPage(1);
  };
  const handleResetBtnClick = () => {
    setPage(1);
    setSearchedAccountId('');
  };
  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className='bg-white mb-6 py-5 px-6 rounded-lg'>
        <Form onFinish={handleSearchFormSubmit}>
          <div className='gap-10 flex w-full'>
            <div className='flex-1'>
              <Form.Item
                name={'searchedAccount'}
                style={{ margin: 0 }}
              >
                <Input
                  placeholder='Search by account id'
                  size='large'
                />
              </Form.Item>
            </div>
            <div className='flex justify-end gap-3'>
              <div>
                <CustomButton htmlType='submit'>Search</CustomButton>
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
          </div>
        </Form>
      </div>
      <div className=' gap-10 bg-white rounded-lg overflow-hidden'>
        <Table
          scroll={{ x: 1400 }}
          loading={isFetching}
          pagination={false}
          dataSource={data?.purchases}
          columns={columns}
        />
        <CustomPagination
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          onNextBtnClick={handleNextBtnClick}
          onBackBtnClick={handleBackBtnClick}
          loading={isFetching}
        />
      </div>
      <DashboardSingalPurchaseDetails
        purchaseDetails={purchaseDetails}
        onClose={handlePurchaseDrawerClose}
      />
    </div>
  );
}

export default DashboardPurchases;
