import React, { useState } from 'react';
import './message-sender.css';

const messages = [
  {
    username: 'GlobeTrotter',
    profil: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'GlobeT rotter',
    message: `Aventure autour du monde! Prochain arrêt : Tokyo, Japon. 🌏✈️`,
    image: 'https://source.unsplash.com/800x800/?travel',
  },
  {
    username: 'CuisineGourmande',
    profil: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Chef Passionnée',
    message: `Création de délicieux plats en cuisine aujourd'hui! 🍲👩‍🍳`,
    image:
      'https://images.unsplash.com/photo-1464500542410-1396074bf230?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const MessageSender = () => {
  const [isOpended, setIsOpened] = useState(false);
  return (
    <div className={`messagesender-container ${isOpended && 'open'} `}>
      <div
        className='messagesender-container__header'
        onClick={() => setIsOpened(!isOpended)}
      >
        <span>Message</span>
        <div className='messagesender-container__header-text'>
          <svg
            style={{ height: '20px', width: '20px' }}
            viewBox='0 0 24 24'
            aria-hidden='true'
            class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
          >
            <g>
              <path d='M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z'></path>
            </g>
          </svg>
          {isOpended ? (
            <svg
              style={{ height: '20px', width: '20px' }}
              viewBox='0 0 24 24'
              aria-hidden='true'
              class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
            >
              <g>
                <path d='M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z'></path>
              </g>
            </svg>
          ) : (
            <svg
              style={{ height: '20px', width: '20px' }}
              viewBox='0 0 24 24'
              aria-hidden='true'
              class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
            >
              <g>
                <path d='M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z'></path>
              </g>
            </svg>
          )}
        </div>
      </div>
      <div className='messagesender-container__box'>
        <div className='messagesender-container__box-img'>
          <img src='https://randomuser.me/api/portraits/women/14.jpg' alt='' />
        </div>
        <div className='messagesender-container__box-message'>
          <div className='messagesender-container__box-message-profil'>
            <h5>GlobeT rotter</h5>
            <div className='messagesender-container__box-message__user'>
              <span>GlobeTrotter</span> <span>15 nov. 2023</span>
            </div>
          </div>
          <p>Aventure autour du monde! Prochain arrêt</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
