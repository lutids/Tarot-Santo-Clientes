
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCumMQmWQXBIIRNKS6vT6yDETj8-AQqONU",
  authDomain: "tarot-santo.firebaseapp.com",
  projectId: "tarot-santo",
  storageBucket: "tarot-santo.firebasestorage.app",
  messagingSenderId: "751878817580",
  appId: "1:751878817580:web:64b9ab05bf47d097908e89",
  measurementId: "G-JPRGP4BX8K"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
