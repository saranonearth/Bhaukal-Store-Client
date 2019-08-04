import React from 'react';
import { connect } from 'react-redux';
import { addAddressModal } from '../../actions/ModalAction';

const NoAddress = ({ addAddressModal }) => {
  return (
    <div>
      <div className='no-address'>
        <i className='fas fa-id-badge address-icon' />
        <p className='margin-2'>Sed no address found!</p>
        <button
          onClick={() => addAddressModal()}
          id='adBtn'
          className='btn black mt-2'
        >
          Add Address
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addAddressModal }
)(NoAddress);
