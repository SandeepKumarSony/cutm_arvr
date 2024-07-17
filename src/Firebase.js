// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEisLeCWuLexX0SbAGmYNWSbplf7QyYmg",
  authDomain: "arvrnew.firebaseapp.com",
  projectId: "arvrnew",
  storageBucket: "arvrnew.appspot.com",
  messagingSenderId: "536952252060",
  appId: "1:536952252060:web:91a42fdd3348def14a2f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

