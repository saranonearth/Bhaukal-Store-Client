import React, { useEffect } from 'react';
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
import Alert from './components/basic/Alert/Alert';
import Signup from './components/Signup';
import { connect } from 'react-redux';
import { setAuthHeader } from './utils/setAuthHeader';
import { store } from './store';
import { getUser } from './actions/authActions';
import Signin from './components/Signin';
import ProtectedRoute from './components/ProtectedRoute';

if (localStorage.bklToken) {
  setAuthHeader(localStorage.bklToken);
}

function App({ alert, auth }) {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);
  console.log(auth);
  return (
    <>
      <BrowserRouter>
        <Navbar isAuth={auth.isAuth} />
        <Alert alerts={alert} />
        <UserIcons />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/teesofthemonth' component={Tofm} />
          <Route exact path='/alltees' component={AllTees} />
          <ProtectedRoute exact path='/user/orders' component={Orders} />
          <ProtectedRoute exact path='/user' component={Profile} />
          <ProtectedRoute path='/user/cart' component={Cart} />
          <ProtectedRoute
            path='/user/order/orderdetails/:orderid'
            component={OrderDetails}
          />
          <ProtectedRoute
            exact
            path='/user/addressdetails'
            component={AddressDetails}
          />
          <Route exact path='/contact' component={Contact} />
          <Route path='/store' component={Tees} />
          <Route exact path='/product/:productid' component={MainProduct} />
          <Route path='/about' component={About} />
          <Route path='/faqs' component={Faqs} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route component={NothingFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

const mapStatetoProps = state => {
  return {
    alert: state.alert,
    auth: state.auth
  };
};

export default connect(mapStatetoProps)(App);
