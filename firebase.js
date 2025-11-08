// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumMQmWQXBIIRNKS6vT6yDETj8-AQqONU",
  authDomain: "tarot-santo.firebaseapp.com",
  projectId: "tarot-santo",
  storageBucket: "tarot-santo.firebasestorage.app",
  messagingSenderId: "751878817580",
  appId: "1:751878817580:web:64b9ab05bf47d097908e89",
  measurementId: "G-JPRGP4BX8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);