import React, { useEffect } from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Orderlist from './basic/Orderlist';
import Footer from './basic/Footer';
const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
