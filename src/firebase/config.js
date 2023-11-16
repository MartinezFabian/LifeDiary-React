// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../utils/getEnvironments';

// Your web app's Firebase configuration

const {
  VITE_REACT_APP_API_KEY,
  VITE_REACT_APP_APP_ID,
  VITE_REACT_APP_AUTH_DOMAIN,
  VITE_REACT_APP_MESSAGING_SENDER_ID,
  VITE_REACT_APP_PROJECT_ID,
  VITE_REACT_APP_STORAGE_BUCKET,
} = getEnvironments();

const firebaseConfig = {
  apiKey: VITE_REACT_APP_API_KEY,
  authDomain: VITE_REACT_APP_AUTH_DOMAIN,
  projectId: VITE_REACT_APP_PROJECT_ID,
  storageBucket: VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: VITE_REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firestoreDB = getFirestore(firebaseApp);
