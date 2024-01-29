import React, { useEffect, useReducer, useState } from 'react';
import PrimaryButton from '../../utilities/PrimaryButton';
import { useLogin } from '../../hooks/useLogin';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return action.initialState;
    default:
      return state;
  }
};
const Login = ({ islogin, setIslogin }) => {
  const initialState = { email: '', password: '' };
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const { error, isLoading, login } = useLogin();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email && formData.password) {
      login(formData.email, formData.password);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM', initialState });
  };

  return (
    <>
      <div
        onClick={() => setIslogin(false)}
        className={`login__bg ${islogin && 'islogin'}`}
      ></div>
      <div className={`login-contaner ${islogin && 'islogin'}`}>
        <div className='login-contaner__header'>
          <svg
            style={{ height: '30px', width: '30px' }}
            viewBox='0 0 24 24'
            aria-label='X'
            role='img'
            class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-16y2uox r-lwhw9o'
          >
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>

          <h2>Sign in to X</h2>
          {error && <span className='error-message'>{error}</span>}
          {isLoading && <span className='chargement'>Chargement...</span>}
        </div>
        <div className='login-contaner__form-els'>
          <form
            onSubmit={handleSubmit}
            action=''
            className='login-contaner__form'
          >
            <input
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              type='email'
              placeholder='Entrer votre email'
            />
            <input
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              type='password'
              placeholder='Entrer votre mot de passe'
            />

            <PrimaryButton>Next</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
