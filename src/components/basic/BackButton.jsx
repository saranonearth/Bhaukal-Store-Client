import React from 'react';

const BackButton = ({ props }) => {
  const handleClick = () => {
    props.history.goBack();
  };
  return (
    <div>
      <div className='back-holder no-in-mobile'>
        <button onClick={handleClick} className='back-btn mb-2'>
          <i className='fas fa-chevron-left' /> Back
        </button>
      </div>
    </div>
  );
};

export default BackButton;
