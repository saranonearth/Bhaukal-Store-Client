import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editProfileModal } from '../../../actions/ModalAction';
import { editProfile } from '../../../actions/userAction';
const EditProfileModal = ({ editProfileModal, user, editProfile }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    mobileNumber: user.mobileNumber,
    dob: user.dob
  });

  const handleSubmit = e => {
    e.preventDefault();
    editProfile(formData);
    editProfileModal();
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const date =
    formData.dob === null ? '00-00-0000' : formData.dob.split('T')[0];

  return (
    <>
      <div id='myModal' className='modal edit-profile'>
        <div className='modal-content profile-edit'>
          <span onClick={() => editProfileModal()} className='close PB'>
            &times;
          </span>
          <div className='editprofile-form'>
            <h1>Edit Profile</h1>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='form-item'>
                <label htmlFor='name'>Name</label>
                <br />
                <input
                  onChange={e => handleChange(e)}
                  value={formData.name}
                  type='text'
                  name='name'
                />
              </div>
              <div className='form-item'>
                <label htmlFor='mobileNumber'>Mobile Number</label>
                <br />
                <input
                  onChange={e => handleChange(e)}
                  value={formData.mobileNumber}
                  type='tel'
                  maxLength='10'
                  name='mobileNumber'
                />
              </div>
              <div className='form-item'>
                <label htmlFor='dob'>Date of Birth</label>
                <br />
                <input
                  value={date}
                  onChange={e => handleChange(e)}
                  type='date'
                  name='dob'
                />
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

const mapStatetoProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStatetoProps,
  { editProfileModal, editProfile }
)(EditProfileModal);
