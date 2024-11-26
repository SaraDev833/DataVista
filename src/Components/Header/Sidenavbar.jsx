import React from 'react';
import { MdDashboard } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidenavbar = ({ showSidebar }) => {
  const navItem = [
    {
      name: 'Dashboard',
      icon: <MdDashboard />,
      link: '/',
    },
    {
      name: 'Transaction',
      icon: <TbArrowsDoubleNeSw />,
      link: '/transaction',
    },
    {
      name: 'Support',
      icon: <IoIosContacts />,
      link: '/support',
    },
  ];

  return (
    <div className={` w-[256px] shadow-md bg-white flex-col fixed top-0 left-0 z-50 pt-[16px] px-[28px] lg:flex ${showSidebar ? 'block transition-transform duration-300 ease-in-out' : 'hidden'}`} style={{ height: '-webkit-fill-available' }}>
      <div className={`transition-transform ease-in-out duration-300 ${showSidebar ? 'pt-2 pl-6' : ''}`}>
        <h2>Data<span className='text-purple'>V</span>ista</h2>
      </div>
      <div className='pt-6 flex flex-col gap-2'>
        {
          navItem.map(item => (
            <NavLink
              to={item.link}
              key={item.name}
              className={({ isActive }) =>
                `flex gap-2 items-center justify-start py-3 px-4 rounded-md ${isActive ? 'bg-bgColor text-black' : 'text-black'}`}
            >
              <span className='text-2xl font-medium'>{item.icon}</span>
              <h2 className='font-ubuntu text-[14px] font-medium'>
                {item.name}
              </h2>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
}

export default Sidenavbar;
