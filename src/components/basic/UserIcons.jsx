import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserIcons = () => {
  const [openclose, setOpenClose] = useState(false);
  const showUserMenue = e => {
    setOpenClose(!openclose);
  };

  return (
    <>
      <div className='user-mobile-icon no-in-desktop'>
        <div className='dropdown' onClick={showUserMenue}>
          <div>
            <i className='dropbtn far fa-user user-icon' />
          </div>
          <div className={`dropdown-content ${openclose ? 'iconshow' : null}`}>
            <Link to='/user'>Orders</Link>
            <Link to='/faqs'>FAQs</Link>
            <Link to='/#'>Logout</Link>
          </div>
        </div>
      </div>
      <Link to='/user/cart'>
        <div className='cart-mobile-icon no-in-desktop'>
          <i
            data-count='3'
            className='fa fa-shopping-cart cart badge user-icon'
          />
        </div>
      </Link>

      <Link to='/user/cart'>
        <div className='cart-desktop-icon no-in-mobile'>
          <i
            data-count='3'
            className='fa fa-shopping-cart cart badge user-icon'
          />
        </div>
      </Link>
    </>
  );
};

export default UserIcons;
