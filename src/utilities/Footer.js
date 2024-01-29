import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__items'>
        <li className='footer__item'>
          <Link className='footer__item-link' to={'/'}>
            Conditions d’utilisation
          </Link>
        </li>
        <li className='footer__item'>
          <Link className='footer__item-link' to={'/'}>
            Politique de Confidentialité
          </Link>
        </li>
        <li className='footer__item'>
          <Link className='footer__item-link' to={'/'}>
            Politique relative aux cookies Accessibilité
          </Link>
        </li>
        <li className='footer__item'>
          <Link className='footer__item-link' to={'/'}>
            <span>Informations sur les publicités Plus</span>{' '}
            <span>
              <svg
                style={{ height: '20px', width: '20px' }}
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-ip8ujx r-1p4rafz'
              >
                <g>
                  <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                </g>
              </svg>
            </span>
          </Link>
        </li>
        <li className='footer__item'>© 2024 X Corp.</li>
      </ul>
    </footer>
  );
};

export default Footer;
