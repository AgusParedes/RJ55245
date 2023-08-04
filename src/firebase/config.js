// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBr0wsiZAfiwWCAHx0h09p05dOCSrbPtn0",
   authDomain: "rj-55245-dff72.firebaseapp.com",
   projectId: "rj-55245-dff72",
   storageBucket: "rj-55245-dff72.appspot.com",
   messagingSenderId: "1064435289055",
   appId: "1:1064435289055:web:ee21b9d70a994e6ac7926a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)