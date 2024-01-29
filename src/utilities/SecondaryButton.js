import React from 'react';
import './button.css';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='secondary__btn'>
      {children}
    </button>
  );
};

export default SecondaryButton;
