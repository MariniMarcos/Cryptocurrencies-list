// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwxklMoZEw6RoJHH674MdN7HOlYE4Q9iY",
  authDomain: "cryptocurrency-list-323f6.firebaseapp.com",
  projectId: "cryptocurrency-list-323f6",
  storageBucket: "cryptocurrency-list-323f6.appspot.com",
  messagingSenderId: "1007638068823",
  appId: "1:1007638068823:web:eaf463721c6212361e2d12",
  measurementId: "G-956RFKRL5S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);