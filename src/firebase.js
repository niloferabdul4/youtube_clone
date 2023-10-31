// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYPuxddHDG-UZD2LrC1_JZuIf-7806MOk",
  authDomain: "clone-2e97f.firebaseapp.com",
  projectId: "clone-2e97f",
  storageBucket: "clone-2e97f.appspot.com",
  messagingSenderId: "193903403629",
  appId: "1:193903403629:web:6cc1bc6500745656711564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)