import React, { useEffect } from 'react';
import Footer from './basic/Footer';
import BackButton from './basic/BackButton';

const MainProduct = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='product-container'>
        <BackButton props={props} />
        <div className='product-wrapper'>
          <div className='productImg'>
            <img
              className='product-image'
              src='https://via.placeholder.com/1080x1080'
              alt='product img'
            />
          </div>
          <div className='productDetails'>
            <div className='productHeader'>
              <div className='prodTitle'>
                <h1 className='productMainTitle'>Engineering Rocks</h1>
                <h3 className='productSub'>
                  Black Graphic printed Round Neck T-Shirt
                </h3>
              </div>
            </div>
            <div className='product-badges'>
              <div className='product-badge'>
                <span>Available</span>
              </div>
              <div className='product-badge'>
                <span>Tee of thee month</span>
              </div>
              <div className='product-badge'>
                <span>Exclusive</span>
              </div>
            </div>

            <div className='product-Price'>
              <h2 className='productPrice margin-3'>Rs. 299</h2>
            </div>
            <div className='chartOption margin-2'>
              <span id='myBtn'>Size Chart</span>
            </div>
            <div className='productSize margin-2'>
              <div className='itemSize'>S</div>
              <div className='itemSize'>M</div>
              <div className='itemSize'>L</div>
              <div className='itemSize'>XL</div>
              <div className='itemSize'>XXL</div>
            </div>
            <div className='addtoCart margin-4'>
              <button className='btn atc-btn black'>ADD TO CART</button>
            </div>

            <div className='prod-description margin-3'>
              <h2 className='desc-title'>Product Details</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem optio, recusandae eligendi, nobis voluptates et
                tenetur debitis rem quos rerum natus, iure quas a pariatur eaque
                sed. Similique, minima illo!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainProduct;
