
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjDZcQg-Q1hmySFoCL1qtMnSeqCNbkqUU",
  authDomain: "vip-property-d9622.firebaseapp.com",
  projectId: "vip-property-d9622",
  storageBucket: "vip-property-d9622.appspot.com",
  messagingSenderId: "680852084912",
  appId: "1:680852084912:web:6517af069dade099cd8375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);