import React, { useState } from 'react';
import { IoIosContact } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';


const TopNavbar = ({ showSidebar, isOpen, }) => {
 const [dropdown , setDropdown] = useState(false);
  const auth = [
    {
      title: 'Support',
      link: '/support'
    }, {
      title: 'Sign in',
      link: '/sign-in'
    }
  ]
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';

      case '/transaction':
        return 'Transaction';

      case '/support':
        return 'Support';
      default:
        return 'Dashboard';
    }
  }
  return (
    <div className={`fixed top-0 max-w-full z-50  bg-white shadow-md  lg:left-[256px] md:left-0`} style={{ width: '-webkit-fill-available' }}>
      <div className="container py-4 flex justify-between items-center px-4">

        <h2 className={`font-custom font-medium text-[28px]  pl-8`}>
          {getPageTitle()}
        </h2>

        {/* Contact Icon */}
        <span className='block text-[35px] cursor-pointer text-black' onClick={()=>setDropdown(!dropdown)}>
          <IoIosContact />
        </span>

        {/* Contact Dropdown */}
        {dropdown && (
          <div className='absolute top-[60px] right-[50px] bg-white shadow-lg py-1 px-2 rounded-md z-50 '>
               <ul className=''>
                 {auth.map(item =>{
                  return(
                    <Link to={item.link} key={item.title}>
                      <li className='text-[18px] font-medium py-1 hover:text-purple font-ubuntu text-black w-[120px] hover:bg-bgColor px-2'>{item.title}</li>
                    </Link>
                  )
                 })}
               </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
