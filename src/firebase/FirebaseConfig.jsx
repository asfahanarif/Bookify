// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZVAy-LrWnN4DvEQGbcsStv9AP_yqivo",
  authDomain: "bookifydb-7dd26.firebaseapp.com",
  projectId: "bookifydb-7dd26",
  storageBucket: "bookifydb-7dd26.appspot.com",
  messagingSenderId: "1097465308605",
  appId: "1:1097465308605:web:7ddc11c15794578a7c1ed4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
