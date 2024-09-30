import { Navbar, Sidebar } from '@/components';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Login from '@/components/Admin/Login';

const Layout = () => {
  const loction = useLocation();
  return (
    <>
      {loction.pathname === '/' ? (
        <Login />
      ) : (
        <div className="bg-red-500 w-full h-screen">
          <Navbar />
          <div className="flex h-[90%]">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
