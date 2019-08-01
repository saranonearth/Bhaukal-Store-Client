import React from 'react';
import Order from './Order';

const Orderlist = () => {
  return (
    <>
      <div className='panel-content'>
        <div className='sidebar-heading'>
          <h2 className='margin-2'>Orders</h2>
        </div>
        <hr />
        <div className='orders'>
          <Order />
        </div>
      </div>
    </>
  );
};

export default Orderlist;
