// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgHJyCAe-9-c9PNa8Li4PC-Qa2AXs1VX4",
  authDomain: "react-cursos-1b135.firebaseapp.com",
  projectId: "react-cursos-1b135",
  storageBucket: "react-cursos-1b135.appspot.com",
  messagingSenderId: "329476927867",
  appId: "1:329476927867:web:06e70dabfe152cd5f60dde"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );