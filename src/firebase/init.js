// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu0W7xz1_LySMepjxbiZneUnXIlzBC3AY",
  authDomain: "fir-practice-ec16d.firebaseapp.com",
  projectId: "fir-practice-ec16d",
  storageBucket: "fir-practice-ec16d.firebasestorage.app",
  messagingSenderId: "676621227240",
  appId: "1:676621227240:web:b3c541cb553245d562655d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
