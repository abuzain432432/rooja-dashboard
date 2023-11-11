import { useEffect } from 'react';
import LoginForm from '../components/LoginPage/LoginForm';

function LoginPage() {
  useEffect(() => {
    document.title = `Codefair | Get access to your account `;
  }, []);
  return (
    <div className='bg-green-700'>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
