import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

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
const db = getFirestore(app);

export { db };
