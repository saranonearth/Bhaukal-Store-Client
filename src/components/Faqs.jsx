import React from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Faq from './basic/Faq';
import Footer from './basic/Footer';
import { connect } from 'react-redux';

const Faqs = ({ auth }) => {
  return (
    <>
      <div className='panel-container'>
        <div className='panel-wrapper'>
          <div className='panel-sidebar'>
            {auth.isAuth ? (
              <>
                {' '}
                <div className='sidebar-heading'>
                  <h2 className='margin-2'>Account</h2>
                </div>
                <hr />
                <ProfileMenu />
              </>
            ) : null}
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

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps)(Faqs);
