import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyCCprP_NL2B2GJi5QzdwaKzqWl6Qj3Xeik",

  authDomain: "react-my-pets-de3e6.firebaseapp.com",

  projectId: "react-my-pets-de3e6",

  storageBucket: "react-my-pets-de3e6.appspot.com",

  messagingSenderId: "856966839041",

  appId: "1:856966839041:web:1fb2ece0f2064f99ff3900"

};


export const app = initializeApp(firebaseConfig);


export const auth = getAuth();
