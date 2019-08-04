import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
  const orderid = 'DS5DXS';
  return (
    <>
      <div className='order'>
        <div className='order-id'>
          <div>
            <h3>Order# 236589</h3>
          </div>
          <div>
            <Link
              to={`/user/order/orderdetails/${orderid}`}
              className='viewdetails-btn'
            >
              View Details
            </Link>
          </div>
        </div>
        <div className='order-content margin-3'>
          <div>
            <div>
              Ordered Date :
              <span className='detail detail-m'> July 12, 2019</span>
            </div>

            <div className='mt-1'>
              Total Amount :<span className='detail detail-m'> Rs. 1253</span>
            </div>
          </div>
          <div>
            <div>
              Expected Delivery :
              <span className='detail detail-m'>July 24, 2019</span>
            </div>
            <div className='mt-1'>
              Order Status :
              <span className='detail detail-m'>Being Processed</span>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <div>
            <button className='cancel-btn'>Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
