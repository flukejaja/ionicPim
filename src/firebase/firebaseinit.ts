// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDuIVmTNehl7wvpl4M4M7Lk5vaKsx4GUA",
  authDomain: "dddja-19ca2.firebaseapp.com",
  projectId: "dddja-19ca2",
  storageBucket: "dddja-19ca2.appspot.com",
  messagingSenderId: "987326284046",
  appId: "1:987326284046:web:7db6523b9033b22f22175f",
  measurementId: "G-PNSK2ZPB96"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
