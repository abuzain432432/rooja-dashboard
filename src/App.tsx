import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/storeSlices/userAuthSlice';
import { Toaster } from 'react-hot-toast';
import { ROELS } from './types/types';
import { Spin } from 'antd';

import DashboardLayout from './components/layout/DashboardLayout';
import {
  PageNotFoundPage,
  DashboardOverviewPage,
  DashboardProductsPage,
  DashboardAccountsPage,
  DashboardFundingsPage,
  LoginPage,
  DashboardNewAdminPage,
  DashboardPurchasesPage,
  DashboardSettingsPage,
  DashboardWithdrawalsPage,
  ErrorPage,
} from './pages/Pages';
import RootLayout from './components/layout/RootLayout';
import ProtectRolesBasedRouteComponents from './components/ui/ProtectRolesBasedRouteComponents';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      errorElement={<ErrorPage />}
      element={<RootLayout />}
    >
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
              protect={<DashboardNewAdminPage />}
              allowedRoles={[ROELS.SUPER]}
            />
          }
        />
      </Route>
      <Route path='*' element={<PageNotFoundPage />} />
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
