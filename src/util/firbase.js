// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaXtkdamC37JD9ca9eOjv489SEStxVCW8",
  authDomain: "netflix-3e448.firebaseapp.com",
  projectId: "netflix-3e448",
  storageBucket: "netflix-3e448.appspot.com",
  messagingSenderId: "1072493440649",
  appId: "1:1072493440649:web:f6f168bb725dc605aca058",
  measurementId: "G-K1BJSDHN07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);