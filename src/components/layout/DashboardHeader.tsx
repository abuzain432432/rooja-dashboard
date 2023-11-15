import { useDispatch, useSelector } from 'react-redux';
import {
  getUserDetailsSlice,
  logout,
} from '../../store/storeSlices/userAuthSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CutomButton';
import { Modal } from 'antd';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';

export default function DashboardHeader() {
  const user = useSelector(getUserDetailsSlice);
  const [logoutModal, setLogoutModal] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pathname = location.pathname;
  let heading = 'Overview';
  if (pathname.includes('overview')) {
    heading = 'Overview';
  } else if (pathname.includes('accounts')) {
    heading = 'Accounts';
  } else if (pathname.includes('withdrawals')) {
    heading = 'Withdrawals';
  } else if (pathname.includes('purchases')) {
    heading = 'Purchases';
  } else if (pathname.includes('settings')) {
    heading = 'Settings';
  } else if (pathname.includes('fundings')) {
    heading = 'Fundings';
  } else if (pathname.includes('products')) {
    heading = 'Products';
  } else if (pathname.includes('new-admin')) {
    heading = 'Create Admin';
  }
  const handleLogoutBtn = () => {
    dispatch(logout());
    localStorage.removeItem('dashboardData');
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className='h-[70px] w-full px-12 bg-white flex items-center'>
      <div className='flex gap-4 justify-between w-full items-center'>
        <p className='text-xl font-bold'>{heading}</p>
        <div className='flex gap-4'>
          <div className='flex gap-2 items-center text-gray-600'>
            <p>{user?.user?.first_name}</p>
            <p>{user?.user?.last_name}</p>
          </div>
          <CustomButton
            theme='red'
            icon={<FiLogOut />}
            onClick={() => setLogoutModal(true)}
          >
            Logout
          </CustomButton>
        </div>
      </div>

      <Modal
        onCancel={() => setLogoutModal(false)}
        open={logoutModal}
        footer={false}
      >
        <p className='mt-6 flex gap-4 items-center'>
          <ImWarning color={'red'} size={34} />
          <p className='mt-1'>
            Do you really wish to leave and logout ? All the unsaved
            changes will be lost.
          </p>
        </p>
        <div className='flex justify-end mt-4 gap-3'>
          <CustomButton theme='red' onClick={handleLogoutBtn}>
            Yes, Log Out
          </CustomButton>
          <CustomButton onClick={() => setLogoutModal(false)}>
            No, Cancel
          </CustomButton>
        </div>
      </Modal>
    </div>
  );
}
