/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { WalletSettingsType } from '../../types/types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../ui/CutomButton';
export default function WalletSettings({
  walletSettings,
  onClose,
}: {
  onClose: () => void;
  walletSettings: {
    walletSettings: WalletSettingsType;
    id: string | number;
    settings_type: string;
  } | null;
}) {
  const data = walletSettings?.walletSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);

  const handleSubmit = async (values: WalletSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: walletSettings?.id as number,
        settings_type: walletSettings?.settings_type as string,
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
              <p> {walletSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(walletSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Free Withdrawals Per Day'
            name='free_withdrawals_per_day'
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
            label='Maximum Funding Amount'
            name='maximum_funding_amount'
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
            label='Maximum Wallet Balance'
            name='maximum_wallet_balance'
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
            label='Maximum Withdrawal Amount'
            name='maximum_withdrawal_amount'
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
            label='Minimum Funding Amount'
            name='minimum_funding_amount'
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
            label='Minimum Withdrawal Amount'
            name='minimum_withdrawal_amount'
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
            label='Purchase Received Withdrawal Tx Fee'
            name='purchase_received_withdrawal_tx_fee'
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
            label='Withdrawal Tx Fee Percentage'
            name='withdrawal_tx_fee_percentage'
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
