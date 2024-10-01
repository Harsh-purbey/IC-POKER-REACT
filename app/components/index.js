import React from 'react';
import loadable from '../utils/loadable';
import Loading from './Loading';

// Loading - No need to lazy load this component
export { default as Loading } from './Loading';

export const Welcome = loadable(() => import('./Welcome'), {
  fallback: <Loading />,
});

export const Login = loadable(() => import('./Login'), {
  fallback: <Loading />,
});

export const Navbar = loadable(() => import('./Navbar'), {
  fallback: <Loading />,
});

export const Sidebar = loadable(() => import('./Sidebar'), {
  fallback: <Loading />,
});

export const Dashboard = loadable(() => import('./Dashboard'), {
  fallback: <Loading />,
});

export const AgentManagement = loadable(() => import('./AgentManagement'), {
  fallback: <Loading />,
});

export const UserManagement = loadable(() => import('./UserManagement'), {
  fallback: <Loading />,
});

export const CashGame = loadable(() => import('./CashGame'), {
  fallback: <Loading />,
});

export const Setting = loadable(() => import('./Setting'), {
  fallback: <Loading />,
});

export const Transaction = loadable(() => import('./Transaction'), {
  fallback: <Loading />,
});

export const Tournament = loadable(() => import('./Tournament'), {
  fallback: <Loading />,
});

export const MyLineChart = loadable(() => import('./MyLineChart'), {
  fallback: <Loading />,
});
