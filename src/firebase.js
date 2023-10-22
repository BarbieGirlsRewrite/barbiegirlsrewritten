// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO5b741R3GO08PIv9qlK0HjfgZKZdHGwQ",
  authDomain: "auth-bgr.firebaseapp.com",
  projectId: "auth-bgr",
  storageBucket: "auth-bgr.appspot.com",
  messagingSenderId: "601386933406",
  appId: "1:601386933406:web:718be3c9c414ac141c2f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);