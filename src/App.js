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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <UserIcons />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/teeofthemonth' component={Tofm} />
          <Route exact path='/alltees' component={AllTees} />
          <Route exact path='/user/orders' component={Orders} />
          <Route exact path='/user' component={Profile} />
          <Route component={NothingFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
