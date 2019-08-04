import React from 'react';

const ConfirmationModal = ({ propFunction, closeFunction }) => {
  return (
    <>
      <div id='coModal' class='modal edit-profile'>
        <div class='modal-content profile-edit'>
          <span class='close cop'>&times;</span>
          <div class='editprofile-form'>
            <h1>But Why? :(</h1>
            <p>Are you sure you want to delete your Bhaukal account</p>
            <div class='profile-buttons'>
              <div>
                <button class='btn black'>Delete</button>
              </div>
              <div>
                <button onClick={() => closeFunction()} class='btn'>
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
