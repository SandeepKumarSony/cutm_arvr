// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // `googleUser` from the onsuccess Google Sign In callback.
  //  googUser = gapi.auth2.getAuthInstance().currentUser.get();
  const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
  const result = await signInWithCredential(auth, credential);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

