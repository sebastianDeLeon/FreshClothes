// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxB0oCdJ3WV75lXQ5ODGsEK4twp3kNb18",
  authDomain: "fresh-clothes-c6484.firebaseapp.com",
  projectId: "fresh-clothes-c6484",
  storageBucket: "fresh-clothes-c6484.appspot.com",
  messagingSenderId: "346170943913",
  appId: "1:346170943913:web:a9c59a7148baf89ffebcb8",
  measurementId: "G-LW967JDFR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
