import React, { useEffect } from 'react';
import ProductList from './basic/ProductList';
import Footer from './basic/Footer';
const Tees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='outof-sticky'>
          <div className='header-img'>
            <div className='image-holder'>
              <h1>Grab what is relatable to you!</h1>
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

export default Tees;
