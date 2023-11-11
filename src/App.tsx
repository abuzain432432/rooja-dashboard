import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
// import { ToastContainer } from 'react-toastify';

import LoginPage from './page/LoginPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/storeSlices/userAuthSlice';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './components/ui/DashboardLayout';
import DashboardOverviewPage from './page/DashboardOverviewPage';
import DashboardAccountsPage from './page/DashboardAccountsPage';
import DashboardWithdrawalsPage from './page/DashboardWithdrawalsPage';
import DashboardPurchasesPage from './page/DashboardPurchasesPage';
import DashboardProductsPage from './page/DashboardProductsPage';
import DashboardSettingsPage from './page/DashboardSettingsPage';
import DashboardNewAdmin from './page/DashboardNewAdminPage';
import DashboardFundingsPage from './page/DashboardFundingsPage';
import { Spin } from 'antd';

import { ROELS } from './types/types';
import ProtectRolesBasedRouteComponents from './components/ui/ProtectRolesBasedRouteComponents';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Navigate to={'login'} />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Navigate to={'overview'} />} />
        <Route path='overview' element={<DashboardOverviewPage />} />
        <Route path='accounts' element={<DashboardAccountsPage />} />
        <Route
          path='withdrawals'
          element={
            <ProtectRolesBasedRouteComponents
              protect={<DashboardWithdrawalsPage />}
              allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
            />
          }
        />
        <Route
          path='purchases'
          element={
            <ProtectRolesBasedRouteComponents
              protect={<DashboardPurchasesPage />}
              allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
            />
          }
        />
        <Route path='products' element={<DashboardProductsPage />} />
        <Route
          path='fundings'
          element={
            <ProtectRolesBasedRouteComponents
              protect={<DashboardFundingsPage />}
              allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
            />
          }
        />
        <Route
          path='settings'
          element={
            <ProtectRolesBasedRouteComponents
              protect={<DashboardSettingsPage />}
              allowedRoles={[ROELS.SUPER]}
            />
          }
        />
        <Route
          path='new-admin'
          element={
            <ProtectRolesBasedRouteComponents
              protect={<DashboardNewAdmin />}
              allowedRoles={[ROELS.SUPER]}
            />
          }
        />
      </Route>
    </Route>
  )
);
function App() {
  const [appReady, setAppReady] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const presistToken = async () => {
      const dashboardData = localStorage.getItem('dashboardData');
      const userData = localStorage.getItem('userData');
      if (dashboardData && userData) {
        dispatch(
          setUser({
            dashboardData: JSON.parse(dashboardData),
            userData: JSON.parse(userData),
          })
        );
      }
      setAppReady(true);
    };
    presistToken();
  }, [dispatch]);

  return (
    <>
      {!appReady && (
        <div className='h-screen w-full flex justify-center items-center'>
          <Spin size='large' />
        </div>
      )}
      {appReady && (
        <>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
