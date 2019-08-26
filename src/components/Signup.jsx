import React, { useState } from 'react';
import { connect } from 'react-redux';
import { alert } from '../actions/AlertActions';
import { signup } from '../actions/authActions.js';
import { Redirect, Link } from 'react-router-dom';
const Signup = ({ alert, signup, isAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password do not match');
    } else {
      signup(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isAuth === true) return <Redirect to='/' />;

  return (
    <>
      <div className='signin-container'>
        <div className='singin-form'>
          <h2>Signup</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className='form-item'>
              <label htmlFor='name'>Name</label>
              <br />
              <input
                value={formData.name}
                onChange={e => handleChange(e)}
                type='text'
                name='name'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <br />
              <input
                onChange={e => handleChange(e)}
                type='email'
                value={formData.email}
                name='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <br />
              <input
                onChange={e => handleChange(e)}
                type='password'
                value={formData.password}
                name='password'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <br />
              <input
                value={formData.confirmPassword}
                onChange={e => handleChange(e)}
                type='password'
                name='confirmPassword'
              />
            </div>
            <button
              onChange={e => handleChange(e)}
              type='submit'
              className='btn black margin-3'
            >
              Signup
            </button>
          </form>
          <div className='auth-holder'>
            <Link className='b-text mt-2' to='/signin'>
              Already registed?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStatetoProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(
  mapStatetoProps,
  { alert, signup }
)(Signup);
