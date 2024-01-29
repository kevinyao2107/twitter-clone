import React from 'react';

const SearchForm = () => {
  return (
    <div className='search-container'>
      <form action='' className='search-container__form '>
        <svg
          style={{
            height: '25px',
            width: '25px',
            opacity: 0.5,
            color: '#536471',
          }}
          viewBox='0 0 24 24'
          aria-hidden='true'
          class='r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-14j79pv r-1vr07ui r-1pvhfgn'
        >
          <g>
            <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
          </g>
        </svg>
        <input type='text' placeholder='Chercher' />
      </form>
    </div>
  );
};

export default SearchForm;
