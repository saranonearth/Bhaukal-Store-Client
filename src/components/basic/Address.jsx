import React from 'react';
import { connect } from 'react-redux';
import { editAddressModal } from '../../actions/ModalAction';
const Address = ({ editAddressModal }) => {
  const handleclick = () => {
    editAddressModal();
  };
  return (
    <>
      <div className='order'>
        <div className='order-id'>
          <div>
            <h3>Saran</h3>
          </div>
        </div>
        <div className='order-content margin-3'>
          <div>
            <p>Room No: 573, Block A, Hostel 10, NIT Kurukshetra</p>
          </div>
        </div>
        <div className='buttons'>
          <div>
            <button id='edBtn' onClick={handleclick} className='cancel-btn'>
              Edit Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  null,
  { editAddressModal }
)(Address);
