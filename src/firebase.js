import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBb4j9tT1vV2XQNSBtD2mLNY9rzfikAvHY",
  authDomain: "c2c-club.firebaseapp.com",
  projectId: "c2c-club",
  storageBucket: "c2c-club.appspot.com",
  messagingSenderId: "738730871746",
  appId: "1:738730871746:web:31037555367e190263a45b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db