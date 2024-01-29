import React from 'react';

const ProfilNav = () => {
  return (
    <nav className='profil-nav'>
      <ul className='profil-nav__items'>
        <li className='profil-nav__item'>
          <span className='active'>Posts</span>
        </li>
        <li className='profil-nav__item'>
          <span>Reponses</span>
        </li>
        <li className='profil-nav__item'>
          <span>Tweets marquants</span>
        </li>
        <li className='profil-nav__item'>
          <span>Media</span>
        </li>
        <li className='profil-nav__item'>
          <span>J'aime</span>
        </li>
      </ul>
    </nav>
  );
};

export default ProfilNav;
