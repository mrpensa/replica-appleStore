import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTvJgkLrbq9-4NZxkfC9JPuzsuTBWXVq8",
  authDomain: "back-mp.firebaseapp.com",
  projectId: "back-mp",
  storageBucket: "back-mp.appspot.com",
  messagingSenderId: "1098805269812",
  appId: "1:1098805269812:web:6ccad0ea0e35f36225c161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
  }
  
  export function getFirestore(){
    return firebase.firestore(app)
  }
  
  export const generateOrder = (formData, cart, total) => {
    const db = getFirestore();
    const order = db.collection("orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      total: total
    };
    return order.add(newOrder)
  }
  