// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";
// import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDdGJPRza6iAd_thGeItfBN6bBFV_VEHuc",
  authDomain: "iptproject-46cb0.firebaseapp.com",
  projectId: "iptproject-46cb0",
  storageBucket: "iptproject-46cb0.appspot.com",
  messagingSenderId: "663722357027",
  appId: "1:663722357027:web:d253c7dcce65dcecc61c96",
  measurementId: "G-32MXWWKH0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
