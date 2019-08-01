import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header>
        <nav className='nav-bar'>
          <div className='no-in-mobile' />
          <div className='no-in-mobile' />
          <div className='logo'>
            <Link to='/'>
              <img
                className='logo-img'
                src='https://res.cloudinary.com/saranonearth/image/upload/v1564652801/bhaukalstore/gvabawyzl687p7pjaqp6.png'
                alt='bhaukal-logo'
              />
            </Link>
          </div>
          <div className='no-in-mobile' />
          <div className='account no-in-mobile'>
            <div className='dropdown'>
              <div>
                <i className='dropbtn far fa-user user-icon' />
              </div>
              <div className='dropdown-content'>
                <Link to='/user/orders'>Orders</Link>
                <Link to='/faqs'>FAQs</Link>
                <Link to='#'>Logout</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
