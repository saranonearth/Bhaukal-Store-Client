import React from 'react';
import { connect } from 'react-redux';
import { editProfileModal } from '../../../actions/ModalAction';
const EditProfileModal = ({ editProfileModal }) => {
  return (
    <>
      <div id='myModal' className='modal edit-profile'>
        <div className='modal-content profile-edit'>
          <span onClick={() => editProfileModal()} className='close PB'>
            &times;
          </span>
          <div className='editprofile-form'>
            <h1>Edit Profile</h1>
            <form>
              <div className='form-item'>
                <label htmlFor='name'>Name</label>
                <br />
                <input type='text' name='name' />
              </div>
              <div className='form-item'>
                <label htmlFor='number'>Mobile Number</label>
                <br />
                <input type='tel' name='number' maxength='10' />
              </div>
              <div className='form-item'>
                <label htmlFor='dob'>Date of Birth</label>
                <br />
                <input type='date' name='dob' />
              </div>
              <div className='button-container'>
                <div>
                  <button type='submit' className='btn black margin-3'>
                    Save
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => editProfileModal()}
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
  { editProfileModal }
)(EditProfileModal);
