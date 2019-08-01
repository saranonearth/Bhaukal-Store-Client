import React from 'react';
import Order from './basic/Order';
import ProfileMenu from './basic/ProfileMenu';
import Orderlist from './basic/Orderlist';
import Footer from './basic/Footer';
const Orders = () => {
  return (
    <>
      <div className='panel-container'>
        <div className='panel-wrapper'>
          <div className='panel-sidebar'>
            <div className='sidebar-heading'>
              <h2 className='margin-2'>Account</h2>
            </div>
            <hr />
            <ProfileMenu />
          </div>
          <Orderlist />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
