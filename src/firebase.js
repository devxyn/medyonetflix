/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxMGfDOAGUff9UBrJ2KRK6bUtZIdGeHk8",
  authDomain: "medyo-netflix.firebaseapp.com",
  projectId: "medyo-netflix",
  storageBucket: "medyo-netflix.appspot.com",
  messagingSenderId: "851977084244",
  appId: "1:851977084244:web:f50e3c3655582e8e53bcc1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
