import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-red-400  h-full w-[20%] NavLink-8 flex flex-col justify-between items-center">
      <div className="flex flex-col space-y-2 text-center">
        <NavLink className="cursor-pointer" to={'/dashboard'}>
          Dashboard
        </NavLink>
        <NavLink className="cursor-pointer" to={'/agentmanagement'}>
          Agent Management
        </NavLink>
        <NavLink className="cursor-pointer" to={'/usermanagement'}>
          User Management
        </NavLink>
        <NavLink className="cursor-pointer" to={'/cashgames'}>
          Cash Games
        </NavLink>
        <NavLink className="cursor-pointer" to={'/tournament'}>
          Tournaments
        </NavLink>
        <NavLink className="cursor-pointer" to={'/transaction'}>
          Transactions
        </NavLink>
        <NavLink className="cursor-pointer" to={'/setting'}>
          Setting
        </NavLink>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
