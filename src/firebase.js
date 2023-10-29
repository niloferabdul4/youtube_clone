// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getStorage} from 'firebase/storage'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7aHp706apfC4FD25_pWtZH2feAZjulc",
  authDomain: "clone-a47f6.firebaseapp.com",
  projectId: "clone-a47f6",
  storageBucket: "clone-a47f6.appspot.com",
  messagingSenderId: "564300847133",
  appId: "1:564300847133:web:fc149d95eddc13557b4ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export const provider=new GoogleAuthProvider()