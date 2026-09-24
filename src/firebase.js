import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiZGpobHxLD6qKlNPV-MWfLjGtjwl_Mqg",
  authDomain: "mayaplay-b577f.firebaseapp.com",
  projectId: "mayaplay-b577f",
  storageBucket: "mayaplay-b577f.firebasestorage.app",
  messagingSenderId: "863198251637",
  appId: "1:863198251637:web:22109d8285d9b819e2c63c",
  measurementId: "G-9929DWWYFZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);