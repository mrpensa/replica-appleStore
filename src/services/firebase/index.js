import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIh5idGy8yKFnbvhyZvCT7Opf7nP4pmFE",
  authDomain: "nuevareplica-mp.firebaseapp.com",
  projectId: "nuevareplica-mp",
  storageBucket: "nuevareplica-mp.appspot.com",
  messagingSenderId: "922228382124",
  appId: "1:922228382124:web:67c93c80a3438652840209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)