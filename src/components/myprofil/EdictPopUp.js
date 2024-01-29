import React from 'react';
import PrimaryButton from '../../utilities/PrimaryButton';
import SecondaryButton from '../../utilities/SecondaryButton';

const EdictPopUp = ({ setIsOpended, isOpened }) => {
  return (
    <div
      onClick={() => setIsOpended(false)}
      className={`edict-popup ${isOpened && 'isOpened'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='edict-popup__container'
      >
        <div className='edict-popup__container-header'>
          <div className='edict-popup__container-header__icon'>
            <span onClick={() => setIsOpended(false)}>
              <svg
                style={{ height: '22px', width: '22px' }}
                viewBox='0 0 24 24'
                aria-hidden='true'
                class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
              >
                <g>
                  <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
                </g>
              </svg>
            </span>
            <span>Éditer le profil</span>
          </div>
          <SecondaryButton>Enregistrer</SecondaryButton>
        </div>

        <form className='edict-popup__container-form' action=''>
          <div className='edict-popup__container-form__els'>
            <div className='edict-popup__container-form__el-banner'>
              <img
                src={
                  'https://img.lemde.fr/2024/01/12/1/0/2164/1442/664/0/75/0/647ecb6_5314215-01-06.jpg'
                }
                alt=''
              />
              <label htmlFor='banner'>
                <input style={{ display: 'none' }} type='file' id='banner' />
                <span>
                  <svg
                    style={{ height: '25px', width: '25px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp'
                  >
                    <g>
                      <path d='M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z'></path>
                    </g>
                  </svg>
                </span>
              </label>
            </div>
            <div className='edict-popup__container-form__el-prof'>
              <img
                src={
                  'https://img.lemde.fr/2024/01/12/1/0/2164/1442/664/0/75/0/647ecb6_5314215-01-06.jpg'
                }
                alt=''
              />
              <label htmlFor='image'>
                <input style={{ display: 'none' }} type='file' id='image' />
                <span>
                  <svg
                    style={{ height: '25px', width: '25px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp'
                  >
                    <g>
                      <path d='M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z'></path>
                    </g>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className='edict-popup__container-form__el'>
            <label htmlFor='name'>Nom</label>
            <input type='text' id='name' />
          </div>
          <div className='edict-popup__container-form__el'>
            <label htmlFor='bio'>Bio</label>
            <textarea rows={3} type='text' id='bio' />
          </div>
          <div className='edict-popup__container-form__el'>
            <label htmlFor='localisation'>Localisation</label>
            <input type='text' id='localisation' />
          </div>
          <div className='edict-popup__container-form__el'>
            <label htmlFor='Site-Web'>Site Web</label>
            <input type='text' id='Site-Web' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EdictPopUp;
