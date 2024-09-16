// Import the necessary functions from the SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4EC6QMjvH8RvUmrINjkB3PfeCvi8iWnU",
  authDomain: "clone-6ee44.firebaseapp.com",
  projectId: "clone-6ee44",
  storageBucket: "clone-6ee44.appspot.com",
  messagingSenderId: "295747595918",
  appId: "1:295747595918:web:917207db5bf54e9ca8e3df",
  measurementId: "G-7EW8SJ13W2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
