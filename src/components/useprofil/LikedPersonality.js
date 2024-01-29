import React from 'react';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../utilities/SecondaryButton';

const data = [
  {
    username: 'SoutienAuxElets',
    profil: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'SoutienAuxÉléphants',
    message: `La Côte d'Ivoire🇨🇮 s'est qualifiée pour la phase suivante de la compétition après une victoire impressionnante contre le Nigeria🇳🇬. Les supporters sont en fête! 🎉⚽`,
    image:
      'https://img.lemde.fr/2024/01/12/1/0/2164/1442/664/0/75/0/647ecb6_5314215-01-06.jpg',
  },
  {
    username: 'SoutientEles',
    profil:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'SoutientAuxElets',
    message: `El Hadji Diouf🇸🇳 est partie dans le vestaire des Camerounais pour tenter de calmer Andre Onana🇨🇲. Arrivée à quelques heures du coup d'envoi contre la Guinée, Onana🇨🇲 n'est pas content car il ne figure pas sur la feuille de match.`,
    image: 'https://www.sport.fr/wp-content/uploads/2024/01/Icon_75066686.jpg',
  },

  {
    username: 'FanDeMusique',
    profil: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Mélodie Passionnée',
    message: `En train d'écouter de nouvelles chansons et de découvrir des artistes talentueux! 🎶❤️`,
    image:
      'https://images.unsplash.com/photo-1621628898826-8956e10449eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Personality = ({ data }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.stopPropagation();
  };

  const navigateHandler = () => {
    navigate('/profil/12');
  };
  return (
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
      </div>
    </div>
  );
};

const LikedPersonality = () => {
  return (
    <div className='personality-container'>
      <h4>Vous pourriez aimer</h4>
      {data.map((data) => (
        <Personality data={data} />
      ))}
    </div>
  );
};

export default LikedPersonality;
