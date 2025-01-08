// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjW6x6MH0X9Xb-FhY0B18945Ddu8KC4SM",
  authDomain: "soulscri.firebaseapp.com",
  projectId: "soulscri",
  storageBucket: "soulscri.firebasestorage.app",
  messagingSenderId: "621669607026",
  appId: "1:621669607026:web:d26c9511e96cca4d2184eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




