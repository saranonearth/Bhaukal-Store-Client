import React from 'react';
import { Link } from 'react-router-dom';
const ProfileMenu = () => {
  return (
    <>
      <div className='sidebar-content'>
        <Link to='/user' className='sidebar-item'>
          Profile
        </Link>
        <Link className='sidebar-item' to='/user/orders'>
          Orders
        </Link>
        <Link to='/user/addressdetails' className='sidebar-item'>
          Address Details
        </Link>
      </div>
      <div className='sidebar-support'>
        <div className='sidebar-heading'>
          <h2 className='margin-2'>Support</h2>
        </div>
        <hr />
        <div className='sidebar-content'>
          <Link className='sidebar-item' to='/faqs'>
            FAQs
          </Link>
          <Link to='/contactus' className='sidebar-item'>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
