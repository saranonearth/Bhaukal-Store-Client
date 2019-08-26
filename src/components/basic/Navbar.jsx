import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

const Navbar = ({ logout, isAuth }) => {
  console.log(isAuth);
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
                <Link to='/signin'>
                  {' '}
                  <i className='dropbtn far fa-user user-icon' />
                </Link>
              </div>
              {isAuth ? (
                <div className='dropdown-content'>
                  <Link to='/user/orders'>Orders</Link>
                  <Link to='/faqs'>FAQs</Link>
                  <Link to='/' onClick={() => logout()}>
                    Logout
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default connect(
  null,
  { logout }
)(Navbar);
