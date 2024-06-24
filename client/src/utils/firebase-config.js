
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDIP-nJxbGGwcn6rpjR_Ibwi0W5AsUbqaQ",
  authDomain: "netflix-project-dceb7.firebaseapp.com",
  projectId: "netflix-project-dceb7",
  storageBucket: "netflix-project-dceb7.appspot.com",
  messagingSenderId: "893318846021",
  appId: "1:893318846021:web:56ebe9e1fdfde22e6df52c",
  measurementId: "G-S4KR11F4L6"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)