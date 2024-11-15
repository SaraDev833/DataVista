import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import Sidenavbar from './Sidenavbar';
import { FaBars } from "react-icons/fa";
import { useSidebar } from '../SidebarContext';

const DashboardHeader = ({}) => {

  const { showSidebar, toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    setIsOpen(showSidebar);
  }, [showSidebar]);


  const open = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  const Links = [
    {
      name: 'Dashboard',
      link: '/dashboard',

    } , 
    {
      name :'Transaction',
      link: '/transaction'
    },
    {
      name: 'Support' , 
      link: '/support'
    }
  ]

  return (
    <div className="relative">

      <FaBars
        className="fixed left-6 top-[33px] text-xl lg:hidden transition-transform ease-in-out duration-300 hover:scale-110"
        style={{ zIndex: 1000 }}
        onClick={open}
      />

      <TopNavbar showSidebar={showSidebar} isOpen={isOpen} Links = {Links}/>
      <Sidenavbar showSidebar={showSidebar} isOpen={isOpen} Links= {Links}/>
    </div>
  );
};

export default DashboardHeader;
