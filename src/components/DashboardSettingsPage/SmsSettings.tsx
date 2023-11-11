/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { SmsSettingsType } from '../../types/types';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../ui/CutomButton';
export default function SmsSettings({
  smsSettings,
  onClose,
}: {
  onClose: () => void;
  smsSettings: {
    smsSettings: SmsSettingsType;
    settings_type: string;
    id: string | number;
  } | null;
}) {
  const data = smsSettings?.smsSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);

  const handleSubmit = async (values: SmsSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: smsSettings?.id as number,
        settings_type: smsSettings?.settings_type as string,
      }).unwrap();
      toast.success(response?.message);
      onClose();
    } catch (err: any) {
      toast.error(err?.data?.message || 'Something went wrong');
    }
  };

  // max_send_sms_code_retry: number;
  // send_new_sms_code_after_max_retry_in_hours: number;
  // send_new_sms_code_in_minutes: number;

  return (
    <>
      <Drawer
        title={
          <div className='lowercase flex gap-1'>
            <p className='first-letter:uppercase'>
              <p> {smsSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(smsSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Max Send Sms Code Retry'
            name='max_send_sms_code_retry'
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
            label='Send New Sms Code After Max Retry In Hours'
            name='send_new_sms_code_after_max_retry_in_hours'
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
            label='Send New Sms Code In Minutes'
            name='send_new_sms_code_in_minutes'
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
