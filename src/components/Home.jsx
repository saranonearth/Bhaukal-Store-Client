import React, { useEffect } from 'react';
import Footer from './basic/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h2 className='mainbanner'>
                Showoff your Bhaukal-ness with our merch.
              </h2>
            </div>
            <div className='margin-4'>
              <Link to='/teesofthemonth' className='btn btn-lg'>
                SHOP NOW
              </Link>
            </div>
          </div>
          <Link to='/teesofthemonth' className='tom'>
            <div>Tees of the month</div>
          </Link>
          <Link to='/store' className='tees'>
            <div>Tees</div>
          </Link>
          <Link to='/contact' className='contact'>
            <div>contact</div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
