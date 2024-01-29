import React from 'react';
import './utilities.css';
import { Oval } from 'react-loader-spinner';

const PostSpinner = () => {
  return (
    <div className='post-spinner'>
      <Oval
        visible={true}
        height='50'
        width='50'
        color='#1c98eb'
        ariaLabel='oval-loading'
        wrapperStyle={{ color: '#1c98eb' }}
        wrapperClass=''
      />
    </div>
  );
};

export default PostSpinner;
