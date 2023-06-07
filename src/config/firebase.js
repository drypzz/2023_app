// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmYC-wFddNJWJW6a-TsxHbBtdhK3smbQA",
  authDomain: "sresrabemestar.firebaseapp.com",
  projectId: "sresrabemestar",
  storageBucket: "sresrabemestar.appspot.com",
  messagingSenderId: "576597447352",
  appId: "1:576597447352:web:131329ef003db02ba59a4d",
  measurementId: "G-D6V266RHLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics, app};