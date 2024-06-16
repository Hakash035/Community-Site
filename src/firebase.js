import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  // Firebase Config Goes Here
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
