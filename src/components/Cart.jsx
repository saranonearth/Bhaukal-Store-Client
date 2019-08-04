import React from 'react';
import Footer from './basic/Footer';
import BackButton from './basic/BackButton';

const Cart = props => {
  return (
    <>
      <div class='cart-container'>
        <BackButton props={props} />
        <div class='cart-wrapper'>
          <div class='cart-items'>
            <div class='cart-title'>
              <h1>Cart</h1>
            </div>
            <hr />
            <div class='cart-item'>
              <div class='cart-item-wrapper'>
                <div class='cart-image'>
                  <img src='https://via.placeholder.com/150' alt='itemImg' />
                </div>
                <div class='cart-content'>
                  <div class='cart-item details'>
                    <h2 class='margin-2 f-1'>Engineering Rocks</h2>
                    <h4 class='productSub f-2 f-1-5 '>
                      Black Graphic Round nec T-Shirt
                    </h4>
                    <p class='margin-3 detail'>Size: M</p>
                    <p class='detail'>Color: Black</p>
                    <p class='detail'>
                      Quantity:
                      <input class='qty' type='number' min='1' max='10' />
                    </p>
                  </div>
                </div>
                <div class='cart-item-end'>
                  <div class='close f-5'>
                    <div class='no-in-mobile'>&times;</div>
                  </div>
                  <div class='cart-amount detail f-4'>Rs. 299</div>
                  <div class='remove-desktop'>
                    <p class='remove'>Remove</p>
                  </div>
                </div>
              </div>
            </div>
            <div class='cart-item-wrapper'>
              <div class='cart-image'>
                <img src='https://via.placeholder.com/150' alt='itemImg' />
              </div>
              <div class='cart-content'>
                <div class='cart-item details'>
                  <h2 class='margin-2 f-1'>Engineering Rocks</h2>
                  <h4 class='productSub f-2 f-1-5 '>
                    Black Graphic Round nec T-Shirt
                  </h4>
                  <p class='margin-3 detail'>Size: M</p>
                  <p class='detail'>Color: Black</p>
                  <p class='detail'>
                    Quantity:
                    <input class='qty' type='number' min='1' max='10' />
                  </p>
                </div>
              </div>
              <div class='cart-item-end'>
                <div class='close f-5'>
                  <div class='no-in-mobile'>&times;</div>
                </div>
                <div class='cart-amount detail f-4'>Rs. 299</div>
                <div class='remove-desktop'>
                  <p class='remove'>Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div class='cart-details'>
            <div class='cart-title'>
              <h1>Order Total</h1>
            </div>
            <hr />
            <div class='order-total-content'>
              <div class='total-amount'>
                <div class='title-text'>
                  <p class='mt-2'>SUB TOTAL</p>
                  <p class='mt-2'>SIPPING CHARGES</p>
                  <p class='mt-2'>PAY AMOUNT</p>
                </div>
                <div class='cart-mobile-total'>
                  <p class='mt-2'>:</p>
                  <p class='mt-2'>:</p>
                  <p class='mt-2'>:</p>
                </div>
                <div class='right cart-mobile-total'>
                  <p class='mt-2'>Rs. 1253</p>
                  <p class='free mt-2'>FREE</p>
                  <p class='mt-2'>Rs. 1253</p>
                </div>
              </div>
            </div>
            <div class='cart-buttons'>
              <div>
                <button class='checkout-btn'>CHECKOUT</button>
              </div>
              <div>
                <button class='continue-btn'>CONTINUE SHOPPING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
