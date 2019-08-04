import React from 'react';
import Navbar from './components/basic/Navbar';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Tofm from './components/Tofm';
import AllTees from './components/AllTees';
import NothingFound from './components/Nothingfound';
import UserIcons from './components/basic/UserIcons';
import Orders from './components/Orders';
import Profile from './components/Profile';
import OrderDetails from './components/OrderDetails';
import AddressDetails from './components/AddressDetails';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import MainProduct from './components/MainProduct';
import Tees from './components/Tees';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <UserIcons />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/teesofthemonth' component={Tofm} />
          <Route exact path='/alltees' component={AllTees} />
          <Route exact path='/user/orders' component={Orders} />
          <Route exact path='/user' component={Profile} />
          <Route path='/user/cart' component={Cart} />
          <Route
            path='/user/order/orderdetails/:orderid'
            component={OrderDetails}
          />
          <Route exact path='/user/addressdetails' component={AddressDetails} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/store' component={Tees} />
          <Route exact path='/product/:productid' component={MainProduct} />
          <Route path='/about' component={About} />
          <Route path='/faqs' component={Faqs} />
          <Route component={NothingFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
