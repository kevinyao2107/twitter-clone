import React from 'react';
import Layout from '../utilities/Layout';
import SearchForm from '../components/home/SearchForm';
import Tendances from '../components/home/Tendances';
import Suggestions from '../components/home/Suggestions';
import Footer from '../utilities/Footer';
import LikedPersonality from '../components/useprofil/LikedPersonality';
import ProfilHeaderBar from '../components/useprofil/ProfilHeaderBar';
import './edict-profil.css';
import ProfilNav from '../components/useprofil/ProfilNav';
import UsersMessages from '../components/home/UsersMessages';
import MyProfilContent from '../components/myprofil/MyProfilContent';
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
  {
    username: 'GlobeTrotter',
    profil: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Explorateur du Monde',
    message: `Aventure autour du monde! Prochain arrêt : Tokyo, Japon. 🌏✈️`,
    image: 'https://source.unsplash.com/800x800/?travel',
  },
  {
    username: 'CuisineGourmande',
    profil: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Chef Passionnée',
    message: `Création de délicieux plats en cuisine aujourd'hui! 🍲👩‍🍳`,
    image:
      'https://images.unsplash.com/photo-1464500542410-1396074bf230?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    username: 'SportifPassionné',
    profil: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Athlète Motivé',
    message: `Entraînement intense aujourd'hui pour atteindre de nouveaux sommets! 🏋️‍♂️💪`,
    image:
      'https://imgresizer.eurosport.com/unsafe/420x420/filters:format(jpeg):focal(94x65:96x63)/origin-imgresizer.eurosport.com/2023/10/16/3804640-77382744-310-310.jpg',
  },
  {
    username: 'ArtisteEnHerbe',
    profil: 'https://randomuser.me/api/portraits/women/16.jpg',
    name: 'Créatrice Inspirée',
    message: `Exploration artistique et création de nouvelles œuvres aujourd'hui! 🎨🌟`,
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    username: 'TechEnthusiast',
    profil: 'https://randomuser.me/api/portraits/men/17.jpg',
    name: 'Passionné de Technologie',
    message: `Exploration des dernières technologies et innovations! 🚀🔧`,
    image:
      'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    username: 'NatureLover',
    profil: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Amoureuse de la Nature',
    message: `Randonnée dans la nature et appréciation des paysages magnifiques! 🌲🏞️`,
    image:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const EdictProfil = () => {
  return (
    <Layout>
      <main className='central'>
        <div className='central-container'>
          <div className='central-left'>
            <ProfilHeaderBar />
            <div className='central-left__bottom'>
              <MyProfilContent />
              <ProfilNav />
              <UsersMessages />
            </div>
          </div>
          <div className='central-right'>
            <SearchForm />
            <div className='central-right__bottom'>
              <div className='central-right__bottom-content'>
                <LikedPersonality />
                <Tendances />
                <Suggestions />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default EdictProfil;
