import React from 'react';

const ProductList = () => {
  return (
    <>
      <div className='product'>
        <div className='product-img'>
          <img src='https://via.placeholder.com/150' alt='' />
        </div>
        <div className='product-content'>
          <p className='product-description'>
            Engineering Rocks - Black T-Shirt
          </p>
          <h3>₹299</h3>
        </div>
      </div>
    </>
  );
};

export default ProductList;
