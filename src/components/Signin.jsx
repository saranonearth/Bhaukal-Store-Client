import React, { useState } from 'react';
import { signin } from '../actions/authActions';
import { connect } from 'react-redux';

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
  console.log(auth);
  return (
    <>
      <div className='signin-container'>
        <div className='singin-form'>
          <h2>Signin</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <br />
              <input
                value={formData.email}
                onChange={handleChange}
                type='email'
                name='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <br />
              <input
                value={formData.password}
                onChange={handleChange}
                type='password'
                name='password'
              />
            </div>
            <button type='submit' className='btn black margin-3'>
              Signin
            </button>
          </form>
          <div className='auth-holder'>
            <a className='b-text mt-2' href='./signup.html'>
              New? Create account
            </a>
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
