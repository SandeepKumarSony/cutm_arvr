// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhVoO6MepE2CuLPFOZnUYYxUKa9aWo0GE",
  authDomain: "arvr-login.firebaseapp.com",
  projectId: "arvr-login",
  storageBucket: "arvr-login.appspot.com",
  messagingSenderId: "878059506241",
  appId: "1:878059506241:web:929a18b78bfa68566914c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

