import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const UserIcons = ({ isAuth }) => {
  const [openclose, setOpenClose] = useState(false);
  const showUserMenue = e => {
    setOpenClose(!openclose);
  };
  console.log('asda', isAuth);
  return (
    <>
      <div className='user-mobile-icon no-in-desktop'>
        <div className='dropdown'>
          <div onClick={showUserMenue}>
            <i className='dropbtn far fa-user user-icon' />
          </div>
          {isAuth ? (
            <div
              className={`dropdown-content ${openclose ? 'iconshow' : null}`}
            >
              <Link to='/user/orders'>Orders</Link>
              <Link to='/faqs'>FAQs</Link>
              <Link to='/#'>Logout</Link>
            </div>
          ) : null}
        </div>
      </div>
      {isAuth ? (
        <Link to='/user/cart'>
          <div className='cart-mobile-icon no-in-desktop'>
            <i
              data-count='3'
              className='fa fa-shopping-cart cart badge user-icon'
            />
          </div>
        </Link>
      ) : null}

      {isAuth ? (
        <Link to='/user/cart'>
          <div className='cart-desktop-icon no-in-mobile'>
            <i
              data-count='3'
              className='fa fa-shopping-cart cart badge user-icon'
            />
          </div>
        </Link>
      ) : null}
    </>
  );
};

const mapStatetoProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStatetoProps)(UserIcons);
