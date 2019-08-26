import axios from 'axios';
import {
  alert
} from './AlertActions';
import {
  SIGNUP_SUCCESS,
  AUTH_ERROR,
  GET_USER,
  USER_LOGGEDIN,
  LOGOUT_USER
} from './types';

export const getUser = () => async dispatch => {
  try {
    const res = await axios.get('/user');

    dispatch({
      type: GET_USER,
      payload: res.data.user
    });
    dispatch(alert('Yo there! Welcome'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      console.log(errors)
      errors.forEach(error => dispatch(alert(error.msg)));
    }
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signup = formData => async dispatch => {
  const {
    name,
    email,
    password
  } = formData;
  const body = JSON.stringify({
    name,
    email,
    password
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/auth/signup', body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.token
    });
    window.location.reload()
    dispatch(alert(res.data.msg));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(alert(error.msg)));
    }
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signin = formData => async dispatch => {
  const {
    password,
    email
  } = formData;

  const body = JSON.stringify({
    email,
    password
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/auth/signin', body, config);

    dispatch({
      type: USER_LOGGEDIN,
      payload: res.data.token
    });

    dispatch(alert(res.data.msg));
    window.location.reload()
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(alert(error.msg)));
    }
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  })

  dispatch(alert("Stay Bhaukal!"))
}