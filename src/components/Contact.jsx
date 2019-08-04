import React, { useEffect } from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Footer from './basic/Footer';

const Contact = () => {
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
          <div className='contact-holder'>
            <div className='contact-heading'>
              <h3>Contact Us</h3>
            </div>
            <hr />
            <div className='contact-wrapper'>
              <div className='contact-email'>
                <div className='contact-icon'>
                  <i className='fas fa-envelope' />
                </div>
                <div className='contact-content'>emailaddress@gmail.com</div>
              </div>
              <div className='contact-phone'>
                <div className='contact-icon'>
                  <i className='fa fa-phone' />
                </div>
                <div className='contact-content'>9698758695</div>
              </div>
            </div>
            <hr className='light' />
            <div className='contact-form'>
              <form>
                <div className='form-item '>
                  <label for='name'> Name</label>
                  <br />
                  <input type='text' name='name' />
                </div>
                <div className='form-item '>
                  <label for='Email'>Email</label>
                  <br />
                  <input type='email' name='Email' />
                </div>

                <div className='form-item '>
                  <label for='phone'>Phone</label>
                  <br />
                  <input type='text' name='phone' />
                </div>
                <div className='form-item'>
                  <label for='message'>Message</label>
                  <br />
                  <textarea name='messgae' id='' cols='30' rows='10' />
                </div>

                <button type='submit' className='btn black margin-3'>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
