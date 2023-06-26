// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvitonments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// console.log(process.env);
// console.log(import.meta.env)

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBgHJyCAe-9-c9PNa8Li4PC-Qa2AXs1VX4",
//   authDomain: "react-cursos-1b135.firebaseapp.com",
//   projectId: "react-cursos-1b135",
//   storageBucket: "react-cursos-1b135.appspot.com",
//   messagingSenderId: "329476927867",
//   appId: "1:329476927867:web:06e70dabfe152cd5f60dde"
// };

// Testing
// const firebaseConfig = {
//   apiKey: 'AIzaSyAD2VKlnYqvvHUn2JxtLh37EPOV_vtxSjQ',
//   authDomain: 'react-cursos-testing-bad87.firebaseapp.com',
//   projectId: 'react-cursos-testing-bad87',
//   storageBucket: 'react-cursos-testing-bad87.appspot.com',
//   messagingSenderId: '328902640359',
//   appId: '1:328902640359:web:a13ffbabf5bc11b7ec5842',
// };

// Con ENV
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
