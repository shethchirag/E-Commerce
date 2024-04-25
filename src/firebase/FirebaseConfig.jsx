// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACl9Df8Dj4P1adq0fuiYy3n8AmSE-MwOA",
  authDomain: "ecommerce-65aff.firebaseapp.com",
  projectId: "ecommerce-65aff",
  storageBucket: "ecommerce-65aff.appspot.com",
  messagingSenderId: "189430559474",
  appId: "1:189430559474:web:2df60193f5d6c51800d66b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
