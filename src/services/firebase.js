import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxwNPpYE8X5Vc3X5jasKr-NfFw4uzclM0",
  authDomain: "backend31855.firebaseapp.com",
  projectId: "backend31855",
  storageBucket: "backend31855.appspot.com",
  messagingSenderId: "217650467307",
  appId: "1:217650467307:web:7e678a10089345ca3509ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)