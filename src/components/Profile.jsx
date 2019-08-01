import React from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Footer from './basic/Footer';
const Profile = () => {
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
              <h2 className='margin-2'>Your Profile</h2>
            </div>
            <hr />
            <div className='profile-details'>
              <div className='profile-holder'>
                <div className='img-header' />
                <div className='profile-img'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojt3oCkhCvcRXNvtVMj-srW3-OJDDCxuydGY7SUIBLZ9MVUxF'
                    alt='profile-img'
                    className='profile-picture'
                  />
                </div>
                <div className='profile-content'>
                  <div className='details-profile'>
                    <div className='item-block'>
                      <div>Name:</div>
                      <div>Saran</div>
                    </div>
                    <div className='item-block mt-2'>
                      <div>Email:</div>
                      <div>saran@text.com</div>
                    </div>
                    <div className='item-block mt-2'>
                      <div>Mobile Number:</div>
                      <div>8965758632</div>
                    </div>
                    <div className='item-block mt-2'>
                      <div>Date of Birth:</div>
                      <div>21-05-2041</div>
                    </div>
                  </div>
                  <div className='editprofile-btn mt-2'>
                    <button className='btn black' id='myBtn'>
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
              <div className='profile-buttons'>
                <div>
                  <button className='change-password btn remove ca' id='chBtn'>
                    Change Password
                  </button>
                </div>
                <div className=''>
                  <button id='coBtn' className='delete-account btn delete'>
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
