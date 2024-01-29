import React from 'react';

const ThirdButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='third-button'>
      {children}
    </button>
  );
};

export default ThirdButton;
