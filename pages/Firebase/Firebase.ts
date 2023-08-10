import { getApps, initializeApp ,getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJai-BtucqyovU9cQYlTyXD2-gDgAuprE",
  authDomain: "thinkcode-29f55.firebaseapp.com",
  projectId: "thinkcode-29f55",
  storageBucket: "thinkcode-29f55.appspot.com",
  messagingSenderId: "981799827903",
  appId: "1:981799827903:web:7f9cdb3cffc4bddb9bc90a"
  
};

const app =  !getApps.length ? initializeApp(firebaseConfig):getApp() ;

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };



