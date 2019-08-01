import React from 'react';
import ProductList from './basic/ProductList';
const AllTees = () => {
  return (
    <>
      <div className='container'>
        <div className='outof-sticky'>
          <div className='header-img'>
            <div className='image-holder'>
              <h1>Tees of the month</h1>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className='container-p'>
          <div className='products'>
            <ProductList />
            <ProductList />
            <ProductList />
          </div>
        </div>
      </main>
    </>
  );
};

export default AllTees;
