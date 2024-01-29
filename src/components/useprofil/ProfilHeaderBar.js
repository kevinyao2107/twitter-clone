import React from 'react';
import { Link } from 'react-router-dom';

const ProfilHeaderBar = () => {
  return (
    <div className='profil-header__Bar'>
      <div className='profil-header__Bar__els'>
        <Link to={'/'}>
          <svg
            viewBox='0 0 24 24'
            aria-hidden='true'
            class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
          >
            <g>
              <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
            </g>
          </svg>
        </Link>
        <div className='profil-header__Bar__els-text'>
          <h4>Karma Shopping</h4>
          <span>21k posts</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilHeaderBar;
