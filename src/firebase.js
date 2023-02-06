import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "auth-1-b7c40.firebaseapp.com",
  projectId: "auth-1-b7c40",
  storageBucket: "auth-1-b7c40.appspot.com",
  messagingSenderId: "902885853597",
  appId: "1:902885853597:web:93439dbcbdfe241dba0774",
  measurementId: "G-GKWPEJ9KZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app