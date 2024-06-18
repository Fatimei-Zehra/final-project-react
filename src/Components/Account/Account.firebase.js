// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAm9SWGICHSD2FouQDi1NxRjpG7qbRiyeo",
  authDomain: "accountapp-43b81.firebaseapp.com",
  projectId: "accountapp-43b81",
  storageBucket: "accountapp-43b81.appspot.com",
  messagingSenderId: "1036816800434",
  appId: "1:1036816800434:web:3203721a363f50f7e487ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

