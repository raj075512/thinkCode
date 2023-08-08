


// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.FIREBASE_APIKEY,
  authDomain:process.env.FIREBASE_AUTHDOMAIN,
  projectId:process.env.FIREBASE_PROJECTID,
  storageBucket:process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.FIREBASE_MESSAGINGSENDERID,
  appId:process.env.FIREBASE_APPID,
  measurementId:process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) :getApp() ;
const auth=getAuth(app);
const fireStore =getFirestore(app);

export {auth,fireStore,app};