import React from 'react';
import SecondaryButton from '../../utilities/SecondaryButton';

const PremiumBar = () => {
  return (
    <div className='primary-container'>
      <h4 className='primary-container__title'>Abonnez‑vous à Premium</h4>
      <p className='primary-container__text'>
        Abonnez‑vous pour profiter de nouvelles fonctionnalités et recevoir une
        part des revenus publicitaires si vous respectez les critères.
      </p>
      <SecondaryButton>Souscrire</SecondaryButton>
    </div>
  );
};

export default PremiumBar;
