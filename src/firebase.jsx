
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY2K2UyJXpHLavKBJAVFs4a9ZlYrfrYWY",
  authDomain: "restaurant-app-4fffe.firebaseapp.com",
  projectId: "restaurant-app-4fffe",
  storageBucket: "restaurant-app-4fffe.firebasestorage.app",
  messagingSenderId: "851259524499",
  appId: "1:851259524499:web:4ac45bb009c0f0142f5466",
  measurementId: "G-T8FCQE30VP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);