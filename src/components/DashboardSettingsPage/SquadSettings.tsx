/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, Form, Input } from 'antd';
import { SquadSettingsType } from '../../types/types';
import { useUpdateSettingsMutation } from '../../store/apis/settingsApi';
import { useEffect } from 'react';
import CustomButton from '../ui/CutomButton';
import toast from 'react-hot-toast';
export default function SquadSettings({
  squadSettings,
  onClose,
}: {
  onClose: () => void;
  squadSettings: {
    squadSettings: SquadSettingsType;
    id: string | number;
    settings_type: string;
  } | null;
}) {
  const data = squadSettings?.squadSettings;
  const [form] = Form.useForm();
  const [triger, { isLoading }] = useUpdateSettingsMutation();
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form]);

  const handleSubmit = async (values: SquadSettingsType) => {
    try {
      const response = await triger({
        data: values,
        id: squadSettings?.id as number,
        settings_type: squadSettings?.settings_type as string,
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
              <p> {squadSettings?.settings_type}</p>
            </p>
            settings
          </div>
        }
        placement='right'
        onClose={onClose}
        width={450}
        open={Boolean(squadSettings)}
      >
        <Form
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Dva Duration In Seconds'
            name='dva_duration_in_seconds'
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
            label='Dva Email'
            name='dva_email'
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
            label='Dva Tx Fee Percentage'
            name='dva_tx_fee_percentage'
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
