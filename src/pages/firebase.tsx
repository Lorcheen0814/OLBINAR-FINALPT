// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfR9B4MS_uf0uoWPSR46Y-69Fpg9bj5Es",
  authDomain: "fir-auth-9d662.firebaseapp.com",
  projectId: "fir-auth-9d662",
  storageBucket: "fir-auth-9d662.appspot.com",
  messagingSenderId: "378410572768",
  appId: "1:378410572768:web:0bf49e81a7c3d137126985",
  measurementId: "G-26DM7V1FXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

