import React from 'react';
import { connect } from 'react-redux';
import { addAddressModal } from '../../../actions/ModalAction';

const AddAddressModal = ({ addAddressModal }) => {
  return (
    <div>
      <div id='Modal' className='modal edit-profile'>
        <div className='modal-content profile-edit'>
          <span onClick={() => addAddressModal()} className='close'>
            &times;
          </span>
          <div className='editprofile-form'>
            <h1>Add Address</h1>
            <form>
              <div className='form-item'>
                <label htmlFor='name'>Name </label>
                <br />
                <input type='text' name='name' />
              </div>
              <div className='form-item'>
                <label htmlFor='roomno'>Room No</label>
                <br />
                <input type='text' name='roomno' />
              </div>
              <div className='form-item'>
                <label htmlFor='block'> Block</label>
                <br />
                <input type='text' name='block' />
              </div>
              <div className='form-item'>
                <label htmlFor='hostel'> Hostel</label>
                <br />
                <input type='text' name='hostel' />
              </div>
              <div className='button-container'>
                <div>
                  <button type='submit' className='btn black margin-3'>
                    Save
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => addAddressModal()}
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
    </div>
  );
};

export default connect(
  null,
  { addAddressModal }
)(AddAddressModal);