// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnSwhIc0Oj3usRnZgqMqacwHdf3ZL790w",
  authDomain: "app-e7faf.firebaseapp.com",
  projectId: "app-e7faf",
  storageBucket: "app-e7faf.appspot.com",
  messagingSenderId: "211310420109",
  appId: "1:211310420109:web:67a40dbbdc977f67c5c2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()