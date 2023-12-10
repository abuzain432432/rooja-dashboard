/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Input, Row, Select } from 'antd';
import CustomButton from '../ui/CutomButton';
import CustomHeading from '../ui/CustomHeading';
import { AdminType } from '../../types/types';
import { useCreateAdminMutation } from '../../store/apis/adminApis';
import toast from 'react-hot-toast';

export default function DashboardNewAdmin() {
  const [createAdmin, { isLoading }] = useCreateAdminMutation();
  const [form] = Form.useForm();
  const handleSumbit = async (adminData: AdminType) => {
    try {
      const res = await createAdmin(adminData).unwrap();
      toast.success(res.message);
      form.resetFields();
    } catch (err: any) {
      toast.error(err?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      <div className=' bg-white xl:p-16 p-6 max-w-[1300px] mx-auto'>
        <CustomHeading level={2}>New Admin Data</CustomHeading>
        <Form
          initialValues={{ lang: 'en' }}
          form={form}
          name='basic'
          layout='vertical'
          onFinish={handleSumbit}
          autoComplete='off'
        >
          <Row gutter={16}>
            <Col xs={{ span: 12 }}>
              <Form.Item
                label='Title'
                name='title'
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
                label='Phone Number'
                name='phone'
              >
                <Input size='large' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 12 }}>
              <Form.Item
                label='First Name'
                name='firstName'
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }}>
              <Form.Item
                label='Last Name'
                name='lastName'
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={{ span: 12 }}>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }}>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input.Password size='large' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 12 }}>
              <Form.Item label='Language' name='lang'>
                <Input disabled size='large' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
                label='Role'
                name='role'
              >
                <Select size='large'>
                  <Select.Option value='REGULAR'>
                    Regular
                  </Select.Option>
                  <Select.Option value='SUPPORT'>
                    Support
                  </Select.Option>
                  <Select.Option value='SALES'>Sales</Select.Option>
                  <Select.Option value='SUPER'>Super</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item className='flex justify-end'>
            <CustomButton isLoading={isLoading} htmlType='submit'>
              Create
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
