import React from 'react';

const Dashboard = () => {
  const activites = [
    'Active Player',
    'Inactive Player',
    'Live Tournaments',
    'Live Games',
    'Upcoming Tournaments',
    'Revenue Genrated from Tournaments',
    'Total Rake',
    'Refferal amount given',
    '',
  ];
  return (
    <div className="w-[80%] h-full bg-green-500 flex justify-between p-4 items-center flex-col">
      <div className=" flex flex-wrap justify-center h-[50%]  flex-row gap-4 bg-green-400 px-[10%] py-8">
        {activites.map((activity, index) => {
          return (
            <div
              className="border w-[25%] h-[25%] flex justify-center items-center text-center border-white rounded-xl"
              key={index}
            >
              {activity}
            </div>
          );
        })}
      </div>
      <div className="w-[300px] h-[300px] bg-yellow-300"></div>
    </div>
  );
};

export default Dashboard;
