import { useState } from 'react';
import CustomPagination from '../ui/CustomPagination.tsx';

import { Table } from 'antd';
import CustomButton from '../ui/CutomButton.tsx';
import ProductForm from '../ui/ProductForm.tsx';
import { useDispatch } from 'react-redux';
import { setSelectedProductData } from '../../store/storeSlices/productsSlice.ts';
import { ProductType } from '../../types/types.ts';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoAddSharp } from 'react-icons/io5';
// import toast from 'react-hot-toast';
// import { ProductType, UserType } from '../../types/types.ts';
// import { useGetProductsQuery } from '../../store/apis/productsApis.ts';
const PRODUCTS_DUMY_DATA = [
  {
    id: 1,
    name: 'umer saljgdklsgjdsgjdskljgkdls',
    description: 'umer saljgdklsgjdsgjdskljgkdls',
    status: 'active',
  },
  {
    id: 13,
    name: 'ali saljgdklsgjdsgjdskljgkdls',
    description: 'umer saljgdklsgjdsgjdskljgkdls',
    status: 'pending',
  },
  {
    id: 2,
    name: 'rooja saljgdklsgjdsgjdskljgkdls',
    description: 'umer saljgdklsgjdsgjdskljgkdls',
    status: 'disabled',
  },
];
function DashboardProducts() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showProductDrawer = () => {
    setOpen(true);
  };

  const handleProductDrawer = () => {
    dispatch(setSelectedProductData({ data: null }));
    setOpen(false);
  };
  const columns = [
    // name: 'ali saljgdklsgjdsgjdskljgkdls',
    // description: 'umer saljgdklsgjdsgjdskljgkdls',
    // status: 'pending',
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 350,
      ellipsis: true,
    },
    {
      title: 'status',
      dataIndex: 'status',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (id: string, row: ProductType) => {
        return (
          <div>
            <CustomButton
              icon={<AiOutlineEdit />}
              theme='gray'
              onClick={() =>
                dispatch(
                  setSelectedProductData({ data: { ...row, id } })
                )
              }
            />
          </div>
        );
      },
      width: 150,
      ellipsis: true,
    },
  ];

  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className=' bg-white '>
        <Table
          // scroll={{ x: 1300 }}
          // loading={isFetching}
          pagination={false}
          dataSource={PRODUCTS_DUMY_DATA}
          columns={columns}
        />
        <div className='flex items-center'>
          <div className='pb-6 px-8 mt-6'>
            <CustomButton
              icon={<IoAddSharp className='mr-2' />}
              onClick={showProductDrawer}
            >
              Add new product
            </CustomButton>
          </div>
          <CustomPagination
          // hasPreviousPage={hasPreviousPage}
          // hasNextPage={hasNextPage}
          // onNextBtnClick={handleNextBtnClick}
          // onBackBtnClick={handleBackBtnClick}
          // loading={isFetching}
          />
        </div>
      </div>
      <ProductForm onClose={handleProductDrawer} open={open} />
    </div>
  );
}

export default DashboardProducts;
