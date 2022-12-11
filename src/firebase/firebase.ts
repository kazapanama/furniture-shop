
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "furniture-shop-1a08f.firebaseapp.com",
  projectId: "furniture-shop-1a08f",
  storageBucket: "furniture-shop-1a08f.appspot.com",
  messagingSenderId: "961379232668",
  appId: "1:961379232668:web:814ae5f043ae199cecf659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)