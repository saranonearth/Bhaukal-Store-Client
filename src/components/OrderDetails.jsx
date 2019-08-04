import React from 'react';
import ProfileMenu from './basic/ProfileMenu';
import OrderDorder from './basic/OrderDorder';
import Footer from './basic/Footer';

const OrderDetails = () => {
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
          <div className='panel-content'>
            <div className='sidebar-heading'>
              <h2 className='margin-2'>Order Details</h2>
            </div>
            <hr />
            <div className='orders'>
              <OrderDorder />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
