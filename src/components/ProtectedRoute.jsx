import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth === true ? <Component {...props} /> : <Redirect to='/signin' />
    }
  />
);

const mapStatetoProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStatetoProps)(ProtectedRoute);
