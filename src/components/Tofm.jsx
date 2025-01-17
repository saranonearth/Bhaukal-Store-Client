import React, { useEffect } from 'react';
import ProductList from './basic/ProductList';
import Footer from './basic/Footer';

const Tofm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Footer />
    </>
  );
};

export default Tofm;
