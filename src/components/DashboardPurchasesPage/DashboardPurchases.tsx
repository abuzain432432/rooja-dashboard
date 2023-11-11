/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import CustomPagination from '../ui/CustomPagination.tsx';

import { Table } from 'antd';
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
  const [purchaseDetails, setPurchaseDetails] =
    useState<null | PerchagesDetailsType>(null);
  const { isFetching, data, error } = useGetPurchasesQuery({ page });
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
        return <div>{(balance / row.currency_unit).toFixed(2)}</div>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number, row: PerchagesDetailsType) => {
        return <div>{(amount / row.currency_unit).toFixed(2)}</div>;
      },
    },
    {
      title: 'Seller Balance',
      dataIndex: 'seller_balance',
      key: 'seller_balance',
      render: (sellerBalance: number, row: PerchagesDetailsType) => {
        return (
          <div>{(sellerBalance / row.currency_unit).toFixed(2)}</div>
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
            className={`${status === 'failed' && 'bg-red-500'} ${
              status === 'paid' && 'bg-green-500'
            } ${
              status === 'pending' && 'bg-gray-500'
            } py-2 text-center first-letter:uppercase text-white rounded-xl font-semibold w-[80px]`}
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

  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className=' gap-10 bg-white'>
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
