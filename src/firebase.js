import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE2ePDmAqLVHpqKM30hl0gB9_nLSS0ZGA",
  authDomain: "netflix-clone-d44ff.firebaseapp.com",
  projectId: "netflix-clone-d44ff",
  storageBucket: "netflix-clone-d44ff.appspot.com",
  messagingSenderId: "52839261665",
  appId: "1:52839261665:web:4e0147ba47c84e14c61ea0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);