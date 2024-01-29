import React, { useState } from 'react';
import PrimaryButton from '../utilities/PrimaryButton';
import './auth.css';
import { useSignup } from '../hooks/useSigup';
import Login from '../components/auth/Login';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [islogin, setIslogin] = useState(false);

  const { error, isLoading, singup } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    singup(email, password, displayName);
  };
  return (
    <div className='register'>
      <Login islogin={islogin} setIslogin={setIslogin} />
      <div className='register-container'>
        <div className='register-container__logo'>
          <svg
            viewBox='0 0 24 24'
            aria-hidden='true'
            class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-18jsvk2 r-5sfk15 r-ig955'
          >
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </div>
        <div className='register-container__form-els'>
          <h1>Happening now</h1>
          {error && <span className='error-message'>{error}</span>}
          {isLoading && <span className='chargement'>Chargement...</span>}
          <h3>Join today.</h3>
          <form
            onSubmit={submitHandler}
            action=''
            className='register-container__form'
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Entrer votre email'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Entrer votre mot de passe'
            />
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              type='text'
              placeholder={`Nom d'utilisateur`}
            />
            <PrimaryButton>Créer un compte</PrimaryButton>
          </form>
          <div className='register-container__form-sign'>
            <span>Already have an account?</span>
            <button onClick={() => setIslogin(!islogin)}>Sing in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
