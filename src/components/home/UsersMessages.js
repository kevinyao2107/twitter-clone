import React, { useEffect, useState } from 'react';
import { firestoreConfig } from './../../firebase/config';
import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

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
  // {
  //   username: 'VoyageEnSolo',
  //   profil: 'https://randomuser.me/api/portraits/women/20.jpg',
  //   name: 'Voyageur Solitaire',
  //   message: `Découverte de nouveaux endroits et de nouvelles cultures en solo! 🌍✈️`,
  //   image:
  //     'https://images.unsplash.com/photo-1543007631-3ea2ed9a2a5e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   username: 'LecteurAvid',
  //   profil: 'https://randomuser.me/api/portraits/men/19.jpg',
  //   name: 'Lecteur Avid',
  //   message: `Plongée dans une nouvelle aventure littéraire! 📚📖`,
  //   image:
  //     'https://images.unsplash.com/photo-1551803093-0e036b341f6d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
];

const UsersMessages = ({ uid }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState([]);
  const { documents, error: dataError } = useCollection(
    'messages',
    null
    // ['createdAt', 'desc']
    //  [
    //   'uid',
    //   '==',
    //   uid,
    // ]
  );

  useEffect(() => {
    setIsLoading(true);
    // firestoreConfig
    //   .collection('messages')
    //   .get()
    //   .then((snapshot) => {
    //     if (snapshot.empty) {
    //       setError('Aucun message trouvé');
    //       setIsLoading(false);
    //     } else {
    //       let results = [];
    //       snapshot.docs.forEach((doc) => {
    //         results.push({ id: doc.id, ...doc.data() });
    //       });
    //       setMessage(results);
    //       console.log('================', results);
    //       setIsLoading(false);
    //     }
    //     // console.log('================', snapshot);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   });

    const unsub = firestoreConfig.collection('messages').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('Aucun message trouvé');
          setIsLoading(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setMessage(results);
          setIsLoading(false);
        }
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unsub();
  }, []);

  const deleteMessage = (id) => {
    firestoreConfig.collection('messages').doc(id).delete();
  };

  const updateMessage = (id) => {
    firestoreConfig.collection('messages').doc(id).update({
      username: 'ArtisteEnHerbe',
    });
  };
  return (
    <div>
      {documents.map((data, i) => (
        <Link to={`/post/${data.id}`} key={i} className='user-messages'>
          <div className='user-messages__profil'>
            <div className='user-messages__profil-img'>
              <img src={data.profil} alt='' />
            </div>
          </div>
          <div className='user-messages__post'>
            <div className='user-messages__post-header'>
              <div className='user-messages__post-header__tle'>
                <div className='user-messages__post-header__title'>
                  <h5>{data.name}</h5>
                  <span>@{data.username} - 4h</span>
                </div>
                <span>
                  <svg
                    style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                    </g>
                  </svg>
                </span>
              </div>

              <p>{data.message}</p>
            </div>
            <div className='user-messages__post-img'>
              <img src={data.image} alt='' />
            </div>

            <div className='user-messages__post-interaction'>
              <div
                title='Repondre'
                className='user-messages__post-interaction__comments'
              >
                <span>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z'></path>
                    </g>
                  </svg>
                </span>
                <span>145</span>
              </div>
              <div
                title='Repost'
                className='user-messages__post-interaction__report'
              >
                <span>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z'></path>
                    </g>
                  </svg>
                </span>
                <span>15</span>
              </div>
              <div
                title='Aimer'
                className='user-messages__post-interaction__like'
              >
                <span>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
                    </g>
                  </svg>
                </span>
                <span>175</span>
              </div>
              <div
                title='Voir'
                className='user-messages__post-interaction__voir'
              >
                <span>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z'></path>
                    </g>
                  </svg>
                </span>
                <span>47k</span>
              </div>
              <div className='user-messages__post-interaction__other'>
                <span title='Ajouter aux signets'>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z'></path>
                    </g>
                  </svg>
                </span>
                <span title='Partager'>
                  <svg
                    style={{ height: '20px', width: '20px' }}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi'
                  >
                    <g>
                      <path d='M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z'></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UsersMessages;
