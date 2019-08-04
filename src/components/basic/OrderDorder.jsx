import React from 'react';

const OrderDorder = () => {
  return (
    <>
      <div className='order'>
        <div className='order-id'>
          <h3>Order# 236589</h3>
        </div>
        <div className='order-content margin-3'>
          <div>
            <div>
              Ordered Date :<span className='detail'> July 12, 2019</span>
            </div>

            <div className='mt-1'>
              Total Amount :<span className='detail'> Rs. 1253</span>
            </div>
          </div>
          <div>
            <div>
              Expected Delivery :<span className='detail'>July 24, 2019</span>
            </div>
            <div className='mt-1'>
              Order Status :<span className='detail'>Being Processed</span>
            </div>
          </div>
        </div>
        <div className='ordered-products margin-4'>
          <h3>Items</h3>
          <div className='orderd-prods'>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
            </div>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
            </div>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
            </div>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
            </div>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
            </div>
            <div className='order-product'>
              <img src='https://via.placeholder.com/100x100' alt='' />
              <p>Engineering Rocks</p>
              <p>Size:M</p>
              <p>Color:Black</p>
              <p>Qty:2</p>
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

export default OrderDorder;
