import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA5unFPQWix3HWWyTSKW56VXjWRMbV7Be8',
  authDomain: 'twitter-clone-268b8.firebaseapp.com',
  projectId: 'twitter-clone-268b8',
  storageBucket: 'twitter-clone-268b8.appspot.com',
  messagingSenderId: '152329415690',
  appId: '1:152329415690:web:291f2d163bf1364ecf43f3',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore
const firestoreConfig = firebase.firestore();
const configAuth = firebase.auth();
const configStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { firestoreConfig, configAuth, timestamp, configStorage };
