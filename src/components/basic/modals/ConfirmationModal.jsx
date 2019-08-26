import React from 'react';

const ConfirmationModal = ({ propFunction, value, closeFunction }) => {
  console.log(value);
  return (
    <>
      <div id='coModal' className='modal edit-profile'>
        <div className='modal-content profile-edit'>
          <span className='close cop'>&times;</span>
          <div className='editprofile-form'>
            <h1>But Why? :(</h1>
            <p>Are you sure you want to delete your Bhaukal account</p>
            <div className='profile-buttons'>
              <div>
                <button
                  onClick={() => propFunction(value)}
                  className='btn black'
                >
                  Delete
                </button>
              </div>
              <div>
                <button onClick={() => closeFunction()} className='btn'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
