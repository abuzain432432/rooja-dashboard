/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { PurchaseSettingsType } from '../../types/types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../ui/CutomButton';

export default function PurchaseSettings({
  purchaseSettings,
  onClose,
}: {
  onClose: () => void;
  purchaseSettings: {
    settings_type: string;
    purchaseSettings: PurchaseSettingsType;
    id: string | number;
  } | null;
}) {
  const data = purchaseSettings?.purchaseSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);

  const handleSubmit = async (values: PurchaseSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: purchaseSettings?.id as number,
        settings_type: purchaseSettings?.settings_type as string,
      }).unwrap();
      toast.success(response?.message);
      onClose();
    } catch (err: any) {
      toast.error(err?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <Drawer
        title={
          <div className='lowercase flex gap-1'>
            <p className='first-letter:uppercase'>
              <p> {purchaseSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(purchaseSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Buyer Purchase Tx Fee Percentage'
            name='buyer_purchase_tx_fee_percentage'
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Maximum Single Tx Amount'
            name='maximum_single_tx_amount'
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Minimum Single Tx Amount'
            name='minimum_single_tx_amount'
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Seller Purchase Tx Fee Percentage'
            name='seller_purchase_tx_fee_percentage'
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className='flex justify-end'>
            <CustomButton isLoading={isLoading} htmlType='submit'>
              Submit
            </CustomButton>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
