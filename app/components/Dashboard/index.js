import React from 'react';
import { FaUserPen } from 'react-icons/fa6';
import { MyLineChart } from '..';

const Dashboard = () => {
  return (
    <div className="bg-black h-full w-full space-y-4">
      <div className="p-4 flex justify-around">
        <div className="w-72 h-40 bg border-2 border-[#32334A] rounded-xl p-4 shadow-slate-900 flex justify-between ">
          <div className="text-[#2797bc] font-bold text-xl flex flex-col justify-center gap-4 h-full">
            <p>ACTIVE PLAYER</p>
            <p>13,696</p>
            <FaUserPen />
          </div>
          <div className="h-full flex flex-col-reverse py-1 items-center justify-start gap-2">
            <p className="text-[#2797bc]">100%</p>
            {/* <div className="w-12 h-12 border-2 border-[#2797bc] rounded-full"></div> */}
            {/* <FaUserPen className="text-[#2797bc] font-bold text-xl" /> */}
          </div>
        </div>
        <div className="w-72 h-40 bg border-2 border-[#32334A] rounded-xl p-4 shadow-slate-900 flex justify-between ">
          <div className="text-[#2797bc] font-bold text-xl flex flex-col justify-center gap-4 h-full">
            <p>ACTIVE PLAYER</p>
            <p>13,696</p>
            <FaUserPen />
          </div>
          <div className="h-full flex flex-col-reverse py-1 items-center justify-start gap-2">
            <p className="text-[#2797bc]">100%</p>
            {/* <div className="w-12 h-12 border-2 border-[#2797bc] rounded-full"></div> */}
            {/* <FaUserPen className="text-[#2797bc] font-bold text-xl" /> */}
          </div>
        </div>
        <div className="w-72 h-40 bg border-2 border-[#32334A] rounded-xl p-4 shadow-slate-900 flex justify-between ">
          <div className="text-[#2797bc] font-bold text-xl flex flex-col justify-center gap-4 h-full">
            <p>ACTIVE PLAYER</p>
            <p>13,696</p>
            <FaUserPen />
          </div>
          <div className="h-full flex flex-col-reverse py-1 items-center justify-start gap-2">
            <p className="text-[#2797bc]">100%</p>
            {/* <div className="w-12 h-12 border-2 border-[#2797bc] rounded-full"></div> */}
            {/* <FaUserPen className="text-[#2797bc] font-bold text-xl" /> */}
          </div>
        </div>
        <div className="w-72 h-40 bg border-2 border-[#32334A] rounded-xl p-4 shadow-slate-900 flex justify-between ">
          <div className="text-[#2797bc] font-bold text-xl flex flex-col justify-center gap-4 h-full">
            <p>ACTIVE PLAYER</p>
            <p>13,696</p>
            <FaUserPen />
          </div>
          <div className="h-full flex flex-col-reverse py-1 items-center justify-start gap-2">
            <p className="text-[#2797bc]">100%</p>
            {/* <div className="w-12 h-12 border-2 border-[#2797bc] rounded-full"></div> */}
            {/* <FaUserPen className="text-[#2797bc] font-bold text-xl" /> */}
          </div>
        </div>
      </div>
      <MyLineChart />
    </div>
  );
};

export default Dashboard;
