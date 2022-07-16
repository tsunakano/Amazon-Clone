import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBouKXyqQTQ9iWpxJ3Gb0TqpF-ot71AbPw',
  authDomain: 'challenge-af31f.firebaseapp.com',
  projectId: 'challenge-af31f',
  storageBucket: 'challenge-af31f.appspot.com',
  messagingSenderId: '830245891940',
  appId: '1:830245891940:web:d012eb560ac9e55c0cd471',
  measurementId: 'G-LH231DXN4G',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
