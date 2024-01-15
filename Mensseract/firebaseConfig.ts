// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnPFgDMclTDRuy6myYIhsEQh5I8bo9j-k",
  authDomain: "chat-app-36fc7.firebaseapp.com",
  projectId: "chat-app-36fc7",
  storageBucket: "chat-app-36fc7.appspot.com",
  messagingSenderId: "139039692029",
  appId: "1:139039692029:web:5ffcbfb87c15a06e1c5a94",
  measurementId: "G-8ML5216GD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);