import {getAuth, GoogleAuthProvider} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lotuscart-9307.firebaseapp.com",
  projectId: "lotuscart-9307",
  storageBucket: "lotuscart-9307.firebasestorage.app",
  messagingSenderId: "235667025607",
  appId: "1:235667025607:web:6fd9d63f7e3f9567d9d8e2",
  measurementId: "G-WY47P462Z2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth,provider}
