// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';  


const firebaseConfig = {
  apiKey: "AIzaSyAyamK3EbCA3gLfiybF6tP8Xk7Zc_yM4AU",
  authDomain: "login-b4d25.firebaseapp.com",
  projectId: "login-b4d25",
  storageBucket: "login-b4d25.appspot.com",
  messagingSenderId: "416966451123",
  appId: "1:416966451123:web:7109adbdb0cade735975c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)