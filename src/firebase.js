import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBExbhyLKobCczDxMNQT9BfEoqm8cC8eXw",
    authDomain: "proyecto-taller-9d719.firebaseapp.com",
    projectId: "proyecto-taller-9d719",
    storageBucket: "proyecto-taller-9d719.appspot.com",
    messagingSenderId: "353098017764",
    appId: "1:353098017764:web:8df22d85568c3cbad1b5f1",
    measurementId: "G-GXW3Q3SJX2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
    auth
};