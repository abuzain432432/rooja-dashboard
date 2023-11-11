/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { EmailSettingsType } from '../../types/types';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../ui/CutomButton';

export default function EmailSettings({
  emailSettings,
  onClose,
}: {
  onClose: () => void;
  emailSettings: {
    emailSettings: EmailSettingsType;
    id: string | number;
    settings_type: string;
  } | null;
}) {
  const data = emailSettings?.emailSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);

  const handleSubmit = async (values: EmailSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: emailSettings?.id as number,
        settings_type: emailSettings?.settings_type as string,
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
              <p> {emailSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(emailSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Aws Email Config Set'
            name='aws_email_config_set'
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
            label='General Purpose Email Template'
            name='general_purpose_email_template'
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
            label='Max Send Email Code Retry'
            name='max_send_email_code_retry'
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
            label='No Reply Email Address'
            name='no_reply_email_address'
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
            label='Send New Email Code After Max Retry In Hours'
            name='send_new_email_code_after_max_retry_in_hours'
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
            label='Send New Email Code In Minutes'
            name='send_new_email_code_in_minutes'
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
