import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import PostDetails from '../pages/PostDetails';
import Auth from '../pages/Auth';
import { useMyContext } from '../context/UseContext';
import UserProfil from '../pages/UserProfil';
import EdictProfil from '../pages/EdictProfil';
import MessageSender from '../utilities/MessageSender';

const RouterIndex = () => {
  const url = window.location.pathname;
  const { authIsReady, user } = useMyContext();

  const pages = [
    // { path: '/', exact: true, component: Auth },
    { path: '/home', exact: true, component: Home },
    { path: '/profil/:id', exact: true, component: UserProfil },
    { path: '/post/:id', exact: true, component: PostDetails },
    { path: '/my/profil', exact: true, component: EdictProfil },
  ];

  return (
    <>
      {authIsReady ? (
        <>
          <BrowserRouter basename='/'>
            <Routes>
              <Route
                exact={true}
                path='/'
                element={user ? <Navigate to='/home' replace /> : <Auth />}
              />
              {pages.map(({ component, path }) => {
                const Component = component;
                return (
                  <Route
                    key={path}
                    element={
                      !user ? <Navigate to='/' replace /> : <Component />
                    }
                    path={path}
                  />
                );
              })}
            </Routes>
          </BrowserRouter>
          <MessageSender />
        </>
      ) : (
        <div className='loader'>
          <svg
            style={{ height: '150px', width: '150px' }}
            viewBox='0 0 24 24'
            aria-hidden='true'
            class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-18jsvk2 r-5sfk15 r-ig955'
            fill='#ffff'
          >
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};

export default RouterIndex;
