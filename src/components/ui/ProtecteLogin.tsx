import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserDetailsSlice } from '../../store/storeSlices/userAuthSlice';
import { useNavigate } from 'react-router-dom';

export default function ProtecteLogin({
  children,
}: {
  children: ReactNode;
}) {
  const user = useSelector(getUserDetailsSlice);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return <>{children}</>;
}
