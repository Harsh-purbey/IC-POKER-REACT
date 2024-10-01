import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
// import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [dashboardArrow, setDashboardArrow] = useState(false);
  const [userArrow, setUserArrow] = useState(false);
  const [cashArrow, setCashArrow] = useState(false);
  const [tournamentArrow, setTournamentArrow] = useState(false);
  const [transactionArrow, setTrasactionArrow] = useState(false);
  const [accountArrow, setAccountArrow] = useState(false);
  return (
    // PARENT DIV
    <div className=" border-2 border-black h-full w-[15%] NavLink-8 flex flex-col justify-between items-center bg-[#1D1D1D] ">
      {/* FIRST CHILD */}
      {/* <div classNameNameNameNameName="flex flex-col space-y-2 text-center "> */}
      {/* OUR OUTLET ROUTES */}
      {/* USED NAVLINK FOR VERIFY WHICH ROUTE IS ACTIVE */}
      {/* <NavLink classNameNameNameNameName="cursor-pointer" to={'/dashboard'}>
          Dashboard
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/agentmanagement'}>
          Agent Management
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/usermanagement'}>
          User Management
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/cashgames'}>
          Cash Games
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/tournament'}>
          Tournaments
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/transaction'}>
          Transactions
        </NavLink>
        <NavLink classNameNameNameNameName="cursor-pointer" to={'/setting'}>
          Setting
        </NavLink>
      </div> */}
      {/* FIRST CHILD END */}
      {/* SECOND CHILD */}
      {/* <div>
        <button>Logout</button> 
      </div> */}
      {/* SECOND CHILD END */}
      <div className="flex h-full w-full flex-col justify-between border-e bg-[#1D1D1D] border-black border-2">
        <ul className="mt-6 space-y-1">
          {/* DASHBOARD */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex  cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setDashboardArrow(!dashboardArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>Dashboard</span>
                    {dashboardArrow ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                  </span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    href="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>

          {/* USER MANAGEMENT */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setUserArrow(!userArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>User Management</span>
                    {userArrow ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                  </span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    href="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
          {/* CASH GAMES */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setCashArrow(!cashArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>Cash Games</span>
                    {cashArrow ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                  </span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    href="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
          {/* TOURNAENTS */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setTournamentArrow(!tournamentArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>Tournaments</span>
                    {tournamentArrow ? (
                      <RiArrowDownSLine />
                    ) : (
                      <RiArrowUpSLine />
                    )}
                  </span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    href="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
          {/* TRANSACTION */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setTrasactionArrow(!transactionArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>Transactions</span>
                    {transactionArrow ? (
                      <RiArrowDownSLine />
                    ) : (
                      <RiArrowUpSLine />
                    )}
                  </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
          {/* ACCOUNT */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div
                  className="w-full h-full"
                  onClick={() => setAccountArrow(!accountArrow)}
                >
                  <span className="text-sm font-medium flex justify-between items-center">
                    {' '}
                    <span>Account</span>
                    {accountArrow ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                  </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
