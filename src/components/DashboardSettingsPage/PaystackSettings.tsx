/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { PaystackSettingsType } from '../../types/types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../ui/CutomButton';

export default function PaystackSettings({
  paystackSettings,
  onClose,
}: {
  onClose: () => void;
  paystackSettings: {
    paystackSettings: PaystackSettingsType;
    id: string | number;
    settings_type: string;
  } | null;
}) {
  const data = paystackSettings?.paystackSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);
  // paystack_5k_and_below_transfer_fee: number;
  // paystack_50k_and_above_transfer_fee: number;
  // paystack_50k_and_below_transfer_fee: number;

  const handleSubmit = async (values: PaystackSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: paystackSettings?.id as number,
        settings_type: paystackSettings?.settings_type as string,
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
              <p> {paystackSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(paystackSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Paystack 5k And Below Transfer Fee'
            name='paystack_5k_and_below_transfer_fee'
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
            label='Paystack 50k And Above Transfer Fee'
            name='paystack_50k_and_above_transfer_fee'
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
            label='Paystack 50k And Below Transfer Fee'
            name='paystack_50k_and_below_transfer_fee'
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
