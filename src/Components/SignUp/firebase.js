// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7YTB_jGMhdIs03U2bCyV7sDux0D_OMTE",
  authDomain: "sign-up-56898.firebaseapp.com",
  projectId: "sign-up-56898",
  storageBucket: "sign-up-56898.appspot.com",
  messagingSenderId: "1084094938857",
  appId: "1:1084094938857:web:0bdc82e75c9d948a313a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
