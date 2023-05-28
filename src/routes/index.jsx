/* eslint-disable react-refresh/only-export-components */
import Loadable from '@caixue/react-loadable';
import SpinnerLoader from 'components/Loaders/SpinnerLoader';

const baseLoadable = {
  loading: SpinnerLoader,
};

// for authorize routes only
const Dashboard = Loadable({
  ...baseLoadable,
  loader: () => import('../pages/Dashboard'),
});

export const authorizeRoutes = [
  {
    path: '/app/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
];

// for public routes only
const NotFoundPage = Loadable({
  ...baseLoadable,
  loader: () => import('../pages/PublicPages/NotFoundPage'),
});
export const publicRoutes = [
  {
    path: '/app/404',
    name: 'Page not found',
    component: NotFoundPage,
  },
  {
    path: '*',
    name: 'Page not found',
    component: NotFoundPage,
  },
];

// for unauthorize routes only
const SignIn = Loadable({
  ...baseLoadable,
  loader: () => import('../pages/UnauthorizePages/SignIn'),
});
const SignUp = Loadable({
  ...baseLoadable,
  loader: () => import('../pages/UnauthorizePages/SignUp'),
});
const ForgotPassword = Loadable({
  ...baseLoadable,
  loader: () => import('../pages/UnauthorizePages/ForgotPassword'),
});
export const unauthorizeRoutes = [
  {
    path: '/app/sign-in',
    name: 'Sign in',
    component: SignIn,
    exact: true,
  },
  {
    path: '/app/sign-up',
    name: 'Sign up',
    component: SignUp,
    exact: true,
  },
  {
    path: '/app/forgot-password',
    name: 'Forgot password',
    component: ForgotPassword,
    exact: true,
  },
  // {
  //   path: '/app/account/verify-password',
  //   name: 'Page not found',
  //   component: VerifyPassword1stTime,
  //   exact: true,
  // },
];