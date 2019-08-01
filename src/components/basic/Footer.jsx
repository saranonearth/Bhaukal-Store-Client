import React from 'react';

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
                <i className='fab fa-instagram fa-2x opacity' />
                <i className='fab fa-facebook-square facebook fa-2x opacity' />
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
              <p className='opacity'>About Us</p>
              <p className='opacity'>Contact</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
