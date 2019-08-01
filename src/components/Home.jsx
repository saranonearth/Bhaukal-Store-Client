import React from 'react';
import Footer from './basic/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroURL =
    'https://images.indianexpress.com/2017/09/ts_mensfashion_759.jpg';
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div style={{ background: `url(${heroURL})` }} className='heroimg'>
            <div className='overlay'>
              <div className='text'>Hello World</div>
            </div>
            <div>
              <h2>Showoff your Bhaukal-ness with our merch.</h2>
            </div>
            <div className='margin-4'>
              <Link to='/teeofthemonth' className='btn btn-lg'>
                SHOP NOW
              </Link>
            </div>
          </div>
          <a href='./teesofmonth.html' className='tom'>
            <div>Tees of the month</div>
          </a>
          <a href='#' className='tees'>
            <div>tees</div>
          </a>
          <a href='#' className='contact'>
            <div>contact</div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
