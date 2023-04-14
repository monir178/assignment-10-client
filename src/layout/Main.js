import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className='grid grid-cols-12 gap-4 mx-4'>
        <div className='col-span-3 border-4 border-red-400'>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className='col-span-9 border-4 border-red-400'>
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;