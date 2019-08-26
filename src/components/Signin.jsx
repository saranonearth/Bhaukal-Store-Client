import React, { useState } from 'react';
import { signin } from '../actions/authActions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
const Signin = ({ signin, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    signin(formData);
    setFormData({
      email: '',
      password: ''
    });
  };

  if (auth.isAuth === true) return <Redirect to='/' />;

  return (
    <>
      <div className='signin-container'>
        <div className='singin-form'>
          <h2>Signin</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <br />
              <input
                value={formData.email}
                onChange={e => handleChange(e)}
                type='email'
                name='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <br />
              <input
                value={formData.password}
                onChange={e => handleChange(e)}
                type='password'
                name='password'
              />
            </div>
            <button type='submit' className='btn black margin-3'>
              Signin
            </button>
          </form>
          <div className='auth-holder'>
            <Link className='b-text mt-2' to='/signup'>
              New? Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStatetoProps,
  { signin }
)(Signin);
