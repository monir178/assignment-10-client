import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className='grid grid-cols-12'>
        <div className='col-span-3 hidden lg:block '>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className='col-span-9'>
          <Outlet ></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;