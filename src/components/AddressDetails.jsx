import React from 'react';
import ProfileMenu from './basic/ProfileMenu';
import Address from './basic/Address';
import NoAddress from './basic/NoAddress';
import Footer from './basic/Footer';
import EditAddressModal from './basic/modals/EditAddressModal';
import { connect } from 'react-redux';
import AddAddressModal from './basic/modals/AddAddressModal';
const AddressDetails = ({ modal }) => {
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
              <h2 className='margin-2'>Address Details</h2>
            </div>
            <hr />
            <div className='orders'>
              <Address />
              <NoAddress />
            </div>
          </div>
        </div>
      </div>
      {modal.editAddressModal ? <EditAddressModal /> : null}
      {modal.addAddressModal ? <AddAddressModal /> : null}
      <Footer />
    </>
  );
};

const mapStatetoProps = state => {
  return {
    modal: state.modal
  };
};
export default connect(mapStatetoProps)(AddressDetails);
