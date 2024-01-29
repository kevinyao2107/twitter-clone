import React from 'react';
import SecondaryButton from '../../utilities/SecondaryButton';
import { Link } from 'react-router-dom';
import SeeMore from '../../utilities/SeeMore';

const Suggestion = [
  {
    profil:
      'https://www.journaldugeek.com/app/uploads/2021/10/acheter-shiba-inu-shib.jpg',
    name: 'SHIBA',
    username: 'ShibReports',
  },
  {
    profil:
      'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'vitalik.eth',
    username: 'VitalikButerin',
    isPremium: true,
  },
  {
    profil:
      'https://images.unsplash.com/photo-1607653342852-22a1dabb8c15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Aperture Fin',
    username: 'ApertureFinance',
    isPremium: true,
  },
];

const SuggestionEls = ({ suggestion }) => {
  return (
    <div className='suggestions-container__item'>
      <div className='suggestions-container__item-left'>
        <img src={suggestion.profil} alt='image' />
        <div className='suggestions-container__item-left__info'>
          <div className='suggestions-container__item-left__info-name'>
            <h5>{suggestion.name}</h5>
            {suggestion.isPremium && (
              <span>
                <svg
                  style={{ height: '20px', width: '20px' }}
                  viewBox='0 0 22 22'
                  aria-label='Compte certifié'
                  role='img'
                  class='r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-1plcrui r-lrvibr r-1cvl2hr r-rcggws r-gmc1ak r-9cviqr'
                  data-testid='icon-verified'
                >
                  <g>
                    <path d='M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z'></path>
                  </g>
                </svg>
              </span>
            )}
          </div>

          <span>@{suggestion.username}</span>
        </div>
      </div>
      <SecondaryButton>Suivre</SecondaryButton>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className='suggestions-container'>
      <h4>Suggestions</h4>
      {Suggestion.map((suggestion, index) => (
        <SuggestionEls suggestion={suggestion} key={index} />
      ))}
      <SeeMore />
    </div>
  );
};

export default Suggestions;
