/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Form, Image } from 'antd';
import {
  loginApiType,
  useLoginMutation,
} from '../../store/apis/userAuthApis';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/storeSlices/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import CustomButton from '../ui/CutomButton';
import CustomHeading from '../ui/CustomHeading';
import toast from 'react-hot-toast';
export const LoginForm: React.FC = () => {
  const [login, { data, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = async (values: loginApiType) => {
    try {
      await login(values).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };
  useEffect(() => {
    if (data) {
      dispatch(
        setUser({
          dashboardData: data?.dashboard_data,
          userData: { user: data?.admin, token: data.token },
        })
      );
      localStorage.setItem(
        'dashboardData',
        JSON.stringify(data?.dashboard_data)
      );
      localStorage.setItem(
        'userData',
        JSON.stringify({ user: data?.admin, token: data.token })
      );
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    }
  }, [data, dispatch, navigate]);

  return (
    <div className='min-h-[100vh] bg-green-700 flex justify-center items-center flex-col'>
      <div className=' bg-white py-20 flex flex-col justify-center items-center px-10 shadow-2xl hover:shadow-3xl duration-300 hover:scale-[1.03] rounded-md  mx-auto '>
        <CustomHeading>Welcome</CustomHeading>

        <Image width={70} preview={false} src={logo} />
        <Form
          layout='vertical'
          className='flex justify-center mt-10 items-center flex-col'
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleFormSubmit}
          autoComplete='off'
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input size='large' className='w-[500px]' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password size='large' className='w-[500px]' />
          </Form.Item>

          <div className='flex justify-end  w-[500px]'>
            <CustomButton isLoading={isLoading} htmlType='submit'>
              Submit
            </CustomButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
