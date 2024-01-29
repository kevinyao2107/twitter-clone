import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../utilities/PrimaryButton';
import { firestoreConfig, configStorage } from './../../firebase/config';
import { useFireStore } from '../../hooks/useFireStore';
import BarLoader from 'react-spinners/BarLoader';

const override = {
  display: 'flex',
  margin: '10px 0px',
  borderColor: 'red',
  width: '100%',
  justifyContent: 'end',
  position: 'absolute',
  top: '-25px',
};

const PostMessage = ({ user }) => {
  const { addDocument, success } = useFireStore('messages');

  const [message, setMessage] = useState();
  const [image, setImage] = useState('');
  const [unploadErr, setUnploadErr] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const textareaChange = (e) => {
    if (e.target.value.trim() !== '') {
      setMessage(e.target.value);
    } else {
      setMessage('');
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    try {
      if (!file) {
        setUnploadErr('Aucun fichier sélectionné');
        return;
      }

      const unploadPath = `images/${user.uid}/${file.name}`;
      const img = await configStorage.ref(unploadPath).put(file);
      const imagUrl = await img.ref.getDownloadURL();

      setImage(imagUrl);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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
    // try {
    //   const doc = {
    //     uid: user.uid,
    //     username: user.displayName,
    //     profil: user.photoURL,
    //     message: message,
    //     image: image,
    //     name: user.displayName,
    //   };
    //
    //   await firestoreConfig.collection('messages').add(doc);
    // } catch (error) {
    //   console.error("Erreur lors de l'ajout du post à Firestore:", error);
    // }
  };

  const deleteImage = async (e) => {
    try {
      await configStorage.refFromURL(image).delete();
      setImage('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMessage('');
  }, [success]);

  return (
    <div className='message-container'>
      <div className='message-container__els'>
        <div className='message-container__els-user'>
          <span>Y</span>
        </div>
        <form
          onSubmit={submitHandler}
          className='message-container__els-form'
          action=''
        >
          {isLoading && (
            <BarLoader
              color={'#1c98eb'}
              loading={true}
              cssOverride={override}
              size={150}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          )}

          <textarea
            name=''
            id=''
            cols='30'
            rows='2'
            placeholder='Quoi de neuf ?!'
            onChange={textareaChange}
          />

          {image && (
            <div className='message-container__els-form__img'>
              <img src={image} alt='' />
              <span onClick={deleteImage}>
                <svg
                  style={{ height: '20px', width: '20px' }}
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03'
                >
                  <g>
                    <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
                  </g>
                </svg>
              </span>
            </div>
          )}

          <div className='message-container__els-form__submit'>
            <label htmlFor='file'>
              <input
                id='file'
                onChange={handleFileChange}
                type='file'
                style={{ display: 'none' }}
              />
              <span>
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

            <PrimaryButton image={image} message={message}>
              Poster
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostMessage;
