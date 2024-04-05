// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlJoy0KB_9wXOb_yqkWzdtZV95ZAZzpiQ",
  authDomain: "cutmlearning3d.firebaseapp.com",
  projectId: "cutmlearning3d",
  storageBucket: "cutmlearning3d.appspot.com",
  messagingSenderId: "131276411494",
  appId: "1:131276411494:web:ef74cfb6d75eeef942d3a7",
  measurementId: "G-45N8PYD8HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

