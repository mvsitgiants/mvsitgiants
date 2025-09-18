// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg695P923KpaSMuwBbY6hf6tl2QDyuxB8",
  authDomain: "mvsitgiant.firebaseapp.com",
  projectId: "mvsitgiant",
  storageBucket: "mvsitgiant.firebasestorage.app",
  messagingSenderId: "621509043527",
  appId: "1:621509043527:web:1c872e70e80ea1cb045862",
  measurementId: "G-QY72B6WKFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { app, analytics };
