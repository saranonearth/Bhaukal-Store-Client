import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserIcons = () => {
  const [openclose, setOpenClose] = useState(false);
  const showUserMenue = e => {
    setOpenClose(!openclose);
  };

  return (
    <div>
      <div className='user-mobile-icon no-in-desktop'>
        <div className='dropdown' onClick={showUserMenue}>
          <div>
            <i className='dropbtn far fa-user user-icon' />
          </div>
          <div className={`dropdown-content ${openclose ? 'iconshow' : null}`}>
            <Link to='/user'>Orders</Link>
            <a href='#'>FAQs</a>
            <a href='#'>Logout</a>
          </div>
        </div>
      </div>
      <div className='cart-mobile-icon no-in-desktop'>
        <i
          data-count='3'
          className='fa fa-shopping-cart cart badge user-icon'
        />
      </div>
      <div className='cart-desktop-icon no-in-mobile'>
        <i
          data-count='3'
          className='fa fa-shopping-cart cart badge user-icon'
        />
      </div>
    </div>
  );
};

export default UserIcons;
