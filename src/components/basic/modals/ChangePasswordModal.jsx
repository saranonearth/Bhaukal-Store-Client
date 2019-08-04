import React from 'react';
import { connect } from 'react-redux';
import { changePasswordModal } from '../../../actions/ModalAction';

const ChangePasswordModal = ({ changePasswordModal }) => {
  return (
    <>
      <div id='Modal' className='modal edit-profile'>
        <div className='modal-content profile-edit'>
          <span onClick={() => changePasswordModal()} className='close '>
            &times;
          </span>
          <div className='editprofile-form'>
            <h1>Change Password</h1>
            <form>
              <div className='form-item'>
                <label for='passowrd'>Old Password</label>
                <br />
                <input type='password' name='oldPassword' />
              </div>
              <div className='form-item'>
                <label for='passowrd'>New Password</label>
                <br />
                <input type='password' name='newPassword' />
              </div>
              <div className='form-item'>
                <label for='passowrd'>Confirm Password</label>
                <br />
                <input type='password' name='confirmPassword' />
              </div>

              <div className='button-container'>
                <div>
                  <button type='submit' className='btn black margin-3'>
                    Save
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => changePasswordModal()}
                    className='btn remove-desktop margin-3'
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  null,
  { changePasswordModal }
)(ChangePasswordModal);
