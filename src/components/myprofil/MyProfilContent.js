import React, { useState } from 'react';
import SecondaryButton from '../../utilities/SecondaryButton';
import ThirdButton from '../../utilities/ThirdButton';
import EdictPopUp from './EdictPopUp';

const user = {
  username: 'SoutienAuxElets',
  profil: 'https://randomuser.me/api/portraits/men/11.jpg',
  name: 'SoutienAuxÉléphants',
  message: `La Côte d'Ivoire🇨🇮 s'est qualifiée pour la phase suivante de la compétition après une victoire impressionnante contre le Nigeria🇳🇬. Les supporters sont en fête! 🎉⚽`,
  image:
    'https://img.lemde.fr/2024/01/12/1/0/2164/1442/664/0/75/0/647ecb6_5314215-01-06.jpg',
};

const MyProfilContent = () => {
  const [isOpened, setIsOpended] = useState(false);
  const clickHandler = () => {
    setIsOpended(true);
  };
  return (
    <>
      <EdictPopUp setIsOpended={setIsOpended} isOpened={isOpened} />
      <div className='my-profil'>
        <div className='my-profil__header'>
          <div className='my-profil__header-img'>
            <img src={user.image} alt='' />
          </div>
          <div className='my-profil__header-profil'>
            <div className='my-profil__header-profil__img'>
              <img src={user.profil} alt='' />
            </div>
            <div className='my-profil__header-profil__icon'>
              <ThirdButton onClick={clickHandler}>Edicter profil</ThirdButton>
            </div>
          </div>
        </div>
        <div className='my-profil__textbox'>
          <div className='my-profil__textbox-name'>
            <h4>Karma Shopping</h4>
            <span>@luca_varan</span>
          </div>
          <div className='my-profil__textbox-intro'>
            <span>Personne Public / Créateur de contenus digitaux </span>
          </div>
          <div className='my-profil__textbox-other'>
            <div className='my-profil__textbox-other__city'>
              <svg
                style={{ height: '18px', width: '18px' }}
                viewBox='0 0 24 24'
                aria-hidden='true'
                class='r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-14j79pv r-1d4mawv'
              >
                <g>
                  <path d='M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z'></path>
                </g>
              </svg>
              <span>Marseille, France</span>
            </div>
            <div className='my-profil__textbox-register'>
              <svg
                style={{ height: '18px', width: '18px' }}
                aria-hidden='true'
                class='r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-14j79pv r-1d4mawv'
              >
                <g>
                  <path d='M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z'></path>
                </g>
              </svg>
              <span>A rejoint Twitter en octobre 2014</span>
            </div>
          </div>
          <div className='my-profil__textbox-following'>
            <p>
              <span> 384</span> abonnements
            </p>
            <p>
              <span>188,4 k</span> abonnés
            </p>
          </div>
          <span className='my-profil__textbox-message'>
            Suivi par aucune des personnes que vous suivez
          </span>
        </div>
      </div>
    </>
  );
};

export default MyProfilContent;
