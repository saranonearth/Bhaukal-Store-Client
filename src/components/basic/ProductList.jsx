import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
  return (
    <>
      <div className='product'>
        <div className='product-img'>
          <Link to='/product/SDSD552'>
            <img src='https://via.placeholder.com/150' alt='prd-img' />
          </Link>
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
