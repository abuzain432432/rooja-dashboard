import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserDetailsSlice } from '../../store/storeSlices/userAuthSlice';
import { Navigate } from 'react-router-dom';

export default function ProtectRolesBasedRouteComponents({
  allowedRoles,
  protect,
}: {
  allowedRoles: string[];
  protect: ReactNode;
}) {
  const userData = useSelector(getUserDetailsSlice);
  const hasPermission = allowedRoles.some(
    role => role === userData?.user?.role
  );
  if (!hasPermission) {
    return <Navigate to={'/dashboard'} />;
  }
  return <>{protect}</>;
}
