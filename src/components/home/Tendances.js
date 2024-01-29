import React from 'react';
import SeeMore from '../../utilities/SeeMore';

const twitterTrendances = [
  {
    type: 'Business et finance · Tendances',
    profil: 'Binance',
    post: '950 k posts',
  },
  {
    type: 'Technologie · Tendances',
    profil: 'Tesla',
    post: '720 k posts',
  },
  {
    type: 'Sport · Tendances',
    profil: 'Abidjan',
    post: '10,6 k posts',
  },
  {
    type: 'Politique · Tendances',
    profil: 'President',
    post: '1,14 M posts',
  },
  {
    type: 'Actualités · Tendances',
    profil: 'BBC Business',
    post: '610 k posts',
  },
  {
    type: 'Économie · Tendances',
    profil: 'Economist',
    post: '550 k posts',
  },
  {
    type: 'Investissements · Tendances',
    profil: 'Warren Buffett',
    post: '500 k posts',
  },
  {
    type: 'Sport · Tendances',
    profil: 'LeBron James',
    post: '700k posts',
  },
  {
    type: 'Science · Tendances',
    profil: 'NASA',
    post: '600k posts',
  },
  //   {
  //     type: 'Politique · Tendances',
  //     profil: 'Barack Obama',
  //     post: '850k posts',
  //   },
];

const Tendances = () => {
  return (
    <div className='tendance-container'>
      <h4>Tendances pour vous</h4>
      {twitterTrendances.map((twitterTrendance, i) => (
        <div key={i} className='tendance-container__content'>
          <div className='tendance-container__content-header'>
            <span> {twitterTrendance.type}</span>
            <span>
              <svg
                style={{ height: '30px', width: '30px' }}
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
              >
                <g>
                  <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                </g>
              </svg>
            </span>
          </div>

          <h5 className='tendance-container__content-tite'>
            {twitterTrendance.profil}
          </h5>
          <span className='tendance-container__content-post'>
            {twitterTrendance.post}
          </span>
        </div>
      ))}
      <SeeMore />
    </div>
  );
};

export default Tendances;
