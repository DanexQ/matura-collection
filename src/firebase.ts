// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnV9HYWjK11MKG4U6nM3Ia6kcevBZUVU4",
  authDomain: "matura-collection.firebaseapp.com",
  projectId: "matura-collection",
  storageBucket: "matura-collection.appspot.com",
  messagingSenderId: "147345575759",
  appId: "1:147345575759:web:3f10aed96a4e880bfe7f3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
