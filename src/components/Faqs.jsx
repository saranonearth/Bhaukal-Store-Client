import React from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Faq from './basic/Faq';
import Footer from './basic/Footer';

const Faqs = () => {
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
          <div className='panel-content'>
            <div className='sidebar-heading'>
              <h2 className='margin-2'>FAQs</h2>
            </div>
            <hr />
            <div className='faqs'>
              <Faq />
              <Faq />
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
