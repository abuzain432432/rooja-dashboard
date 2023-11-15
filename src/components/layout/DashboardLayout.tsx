import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

export default function DashboardLayout() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 h-screen overflow-y-auto'>
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
