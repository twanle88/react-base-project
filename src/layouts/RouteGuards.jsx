import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

export const RequireAuth = () => {
  const { accessToken } = useSelector((s) => s.auth);
  const location = useLocation();

  if (!accessToken) {
    return (
      <Navigate
        to={{ pathname: '/app/sign-in', state: { from: location } }}
        replace
      />
    );
  }

  return <Outlet />;
};

export const RequireRole = ({ require }) => {
  const location = useLocation();

  if (require) {
    return (
      <Navigate
        to={{ pathname: '/app/403', state: { from: location } }}
        replace
      />
    );
  }

  return <Outlet />;
};

export const UnauthorizeGuard = () => {
  const { accessToken, profile } = useSelector((s) => s.auth);

  if (accessToken && profile?.status === 'active') {
    return (
      <Navigate
        to="/app/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
};
