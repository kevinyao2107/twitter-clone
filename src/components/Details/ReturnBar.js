import React from 'react';
import { Link } from 'react-router-dom';

const ReturnBar = () => {
  return (
    <div className='return-bar'>
      <div className='return-bar__els'>
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
        <h4>Poster</h4>
      </div>
    </div>
  );
};

export default ReturnBar;
