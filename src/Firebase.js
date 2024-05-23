// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfUxFfWjP4fabhz61w8Z6tvlKfeoWcjh8",
  authDomain: "arvr-78838.firebaseapp.com",
  projectId: "arvr-78838",
  storageBucket: "arvr-78838.appspot.com",
  messagingSenderId: "855346863643",
  appId: "1:855346863643:web:82616339b4751808abe2be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

