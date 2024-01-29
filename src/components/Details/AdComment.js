import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../utilities/PrimaryButton';
import { firestoreConfig, configStorage } from './../../firebase/config';
import { useFireStore } from '../../hooks/useFireStore';

const AdComment = ({ user }) => {
  const { addDocument, success } = useFireStore('messages');

  const [message, setMessage] = useState('');
  const [image, setImage] = useState();
  const [unploadErr, setUnploadErr] = useState();
  const [isFocus, setIsFocus] = useState(false);

  const textareaChange = (e) => {
    if (e.target.value.trim() !== '') {
      setMessage(e.target.value);
    } else {
      setMessage('');
    }
  };

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        setUnploadErr('Aucun fichier sélectionné');
        return;
      }

      const unploadPath = `images/${user.uid}/${file.name}`;
      const img = await configStorage.ref(unploadPath).put(file);
      const imagUrl = await img.ref.getDownloadURL();

      setImage(imagUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const doc = {
      uid: user.uid,
      username: user.displayName,
      profil: user.photoURL,
      message: message,
      image: image,
      name: user.displayName,
    };
    addDocument(doc);
  };

  useEffect(() => {
    setMessage('');
  }, [success]);

  return (
    <div className='comment-container'>
      <p>
        En réponse à <span>@yaokevin</span>{' '}
      </p>
      <div className='comment-container__els'>
        <div className='comment-container__els-user'>
          <span>Y</span>
        </div>
        <form
          onSubmit={submitHandler}
          className={`comment-container__els-form ${isFocus && 'isFocus'} `}
          action=''
        >
          <textarea
            name=''
            id=''
            cols='30'
            rows='2'
            placeholder='Poster votre reponse'
            onFocus={focusHandler}
            // onBlur={blurHandler}
            onChange={textareaChange}
          />
          <div
            className={`comment-container__els-form__submit ${
              isFocus && 'isFocus'
            }`}
          >
            <label htmlFor='file'>
              <input
                id='file'
                onChange={handleFileChange}
                type='file'
                style={{ display: 'none' }}
              />
              <span
                className={`comment-container__els-form__submit-svg ${
                  isFocus && 'isFocus'
                }`}
              >
                <svg
                  style={{
                    height: '25px',
                    width: '25px',
                    cursor: 'pointer',
                    color: '#1a8cd8',
                  }}
                  fill='#1a8cd8'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18yzcnr r-yc9v9c'
                >
                  <g>
                    <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'></path>
                  </g>
                </svg>
              </span>
            </label>
            <PrimaryButton message={message}>Répondre</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdComment;
