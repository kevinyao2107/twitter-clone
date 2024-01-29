import React from 'react';
import './button.css';

const PrimaryButton = ({ children, message, image }) => {
  return (
    <button disabled={message === '' && image === ''} className='primary-btn'>
      {children}
    </button>
  );
};

export default PrimaryButton;
