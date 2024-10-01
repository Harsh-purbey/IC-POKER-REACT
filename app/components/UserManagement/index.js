import React from 'react';

const UserManagement = () => {
  return (
    <div className="w-[80%] h-full bg-black border-2 border-white">
      <div className="p-1 flex justify-end gap-2">
        <div>
          <input
            className="w-80 p-2 bg-black border-2 border-white "
            placeholder="search by username & wallet address"
            name="search wallet"
          />
        </div>
        <div>
          <input
            className="w-80 p-2 bg-black border-2 border-white "
            placeholder="search by username & wallet address"
            name="search"
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
