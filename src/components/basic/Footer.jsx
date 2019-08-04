import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-footer'>
          <div className='footer-wrapper'>
            <div className='sec-1'>
              <p>
                <strong>Follow us</strong>
              </p>
              <div className='social-holder'>
                <a
                  href='https://www.instagram.com/bhaukal_fashion/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-instagram fa-2x opacity' />
                </a>
              </div>
            </div>
            <div className='sec-2'>
              <p>
                <strong>Have Any Questions?</strong>
              </p>
              <p className='email opacity'>bhaukalemail@gmail.com</p>
            </div>
            <div className='sec-3'>
              <p>
                <strong>Company</strong>
              </p>
              <Link className='no-td' to='/about'>
                <p className='opacity'>About Us</p>
              </Link>
              <Link className='no-td' to='/contact'>
                <p className='opacity'>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
