import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTvJgkLrbq9-4NZxkfC9JPuzsuTBWXVq8",
  authDomain: "back-mp.firebaseapp.com",
  databaseURL: "https://back-mp-default-rtdb.firebaseio.com",
  projectId: "back-mp",
  storageBucket: "back-mp.appspot.com",
  messagingSenderId: "1098805269812",
  appId: "1:1098805269812:web:6ccad0ea0e35f36225c161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)