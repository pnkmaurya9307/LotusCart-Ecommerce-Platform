import {getAuth, GoogleAuthProvider} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "myfisrtpeoject.firebaseapp.com",
  projectId: "myfisrtpeoject",
  storageBucket: "myfisrtpeoject.firebasestorage.app",
  messagingSenderId: "98198869654",
  appId: "1:98198869654:web:c0c83a7e12b14b3576d4b7",
  measurementId: "G-0P85VBKKN8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth,provider}
