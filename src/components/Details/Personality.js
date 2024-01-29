import React from 'react';
import SecondaryButton from '../../utilities/SecondaryButton';
import { Link, useNavigate } from 'react-router-dom';

const Personality = ({ data }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.stopPropagation();
  };

  const navigateHandler = () => {
    navigate('/profil/12');
  };

  return (
    <div className='personality-container'>
      <h4>Personnes pertinentes</h4>

      <div onClick={navigateHandler} className='personality'>
        <div className='personality-profil'>
          <img src={data?.profil} alt='' />
        </div>
        <div className='personality-content'>
          <div className='personality-content__info'>
            <div className='personality-content__info-title'>
              <h5>{data?.name}</h5>
              <span>@{data?.username} </span>
            </div>
            <div>
              <SecondaryButton onClick={clickHandler}>Suivre</SecondaryButton>
            </div>
          </div>
          <p>Personne Public / Créateur de contenus digitaux </p>
        </div>
      </div>
    </div>
  );
};

export default Personality;
