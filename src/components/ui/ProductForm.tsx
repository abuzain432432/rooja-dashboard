/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer, Form, Input, Select } from 'antd';
import CustomButton from './CutomButton';
import { useSelector } from 'react-redux';
import { getProductSelectedData } from '../../store/storeSlices/productsSlice';
import { useEffect } from 'react';
import { ProductType } from '../../types/types';
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from '../../store/apis/productsApis';
import toast from 'react-hot-toast';
const { Option } = Select;

const ProductForm = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [productFormRef] = Form.useForm();
  const selectedProductData = useSelector(getProductSelectedData);
  const [
    createProduct,
    { data: createdProductData, isLoading: isProductCreating },
  ] = useCreateProductMutation();

  const [updateProduct, { isLoading: isProductUpdating }] =
    useUpdateProductMutation();

  useEffect(() => {
    if (selectedProductData) {
      const updatedProductData: ProductType = {
        description: selectedProductData.description,
        name: selectedProductData.name,
        status: selectedProductData.status,
      };
      productFormRef.setFieldsValue(updatedProductData);
    } else {
      productFormRef.resetFields();
    }
  }, [selectedProductData]);

  useEffect(() => {
    if (createdProductData) {
      toast.success(createdProductData?.message);
      onClose();
    }
  }, [createdProductData]);

  const handleProductFormFinish = async (
    productData: ProductType
  ) => {
    if (!selectedProductData) {
      try {
        await createProduct({ ...productData }).unwrap();
      } catch (error: any) {
        toast.error(error?.data?.message || 'Something went wrong');
      }
      return;
    }
    try {
      await updateProduct({
        ...productData,
        id: selectedProductData.id,
      }).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <Drawer
        title={
          selectedProductData
            ? 'Update product'
            : 'Create a new product'
        }
        width={500}
        onClose={onClose}
        open={open || selectedProductData !== null}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          onFinish={handleProductFormFinish}
          form={productFormRef}
          layout='vertical'
        >
          <Form.Item
            name='name'
            label='Product Name'
            rules={[
              {
                required: true,
                message: 'Please enter product name',
              },
            ]}
          >
            <Input
              size='large'
              placeholder='Please enter product name'
            />
          </Form.Item>
          <Form.Item
            name='status'
            label='Product Status'
            rules={[
              {
                required: true,
                message: 'Please select product status',
              },
            ]}
          >
            <Select
              size='large'
              placeholder='Please select product status'
            >
              <Option value='pending'>Pending</Option>
              <Option value='active'>Active</Option>
              <Option value='disabled'>Disabled</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='description'
            label='Description'
            rules={[
              {
                required: true,
                message: 'Please enter product description',
              },
            ]}
          >
            <Input.TextArea
              size='large'
              rows={4}
              placeholder='Please enter product description'
            />
          </Form.Item>
          <div className='flex w-full justify-end'>
            <CustomButton
              isLoading={isProductCreating || isProductUpdating}
              htmlType='submit'
            >
              {selectedProductData ? 'Update product' : 'Add product'}
            </CustomButton>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default ProductForm;
