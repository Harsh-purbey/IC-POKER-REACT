import { Navbar, Sidebar } from '@/components';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Login from '@/components/Login';

const Layout = () => {
  const loction = useLocation();
  return (
    <div className="bg-black w-full h-screen">
      {loction.pathname === '/' ? (
        // FOR DEFAULT / ROUTE USING USE LOCATION
        <Login />
      ) : (
        // FOR OTHER CHILDREN ROUTES
        <div className="bg-black w-full h-screen">
          <Navbar />
          <div className="flex h-[90%] border-black border-2 after:border-black">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
