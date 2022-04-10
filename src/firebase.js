// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_6h3fjZ8_wLwSOR7PIq8ub4rx5X4-COk",
    authDomain: "clone-19886.firebaseapp.com",
    projectId: "clone-19886",
    storageBucket: "clone-19886.appspot.com",
    messagingSenderId: "801875740540",
    appId: "1:801875740540:web:615dcd6defd94b16d646f9",
    measurementId: "G-PCD3EK5LV4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth } ;