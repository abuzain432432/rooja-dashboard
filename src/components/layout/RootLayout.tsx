import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getUserDetailsSlice } from '../../store/storeSlices/userAuthSlice';
function RootLayout() {
  const navigate = useNavigate();
  const user = useSelector(getUserDetailsSlice);
  const locations = useLocation();
  const pathname = locations.pathname;
  useEffect(() => {
    if (user) {
      if (pathname === '/') {
        navigate('/dashboard');
        return;
      }
      if (pathname === '/login') {
        navigate('/dashboard');
        return;
      }
      navigate(pathname);
    }
    if (!user) {
      navigate('/login');
    }
  }, [pathname, navigate, user]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default RootLayout;
