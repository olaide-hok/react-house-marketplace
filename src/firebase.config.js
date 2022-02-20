import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU75nV5-VadKqZO-LskSo6WGyEP6_NNoM",
  authDomain: "react-house-marketplace-e354b.firebaseapp.com",
  projectId: "react-house-marketplace-e354b",
  storageBucket: "react-house-marketplace-e354b.appspot.com",
  messagingSenderId: "88341830171",
  appId: "1:88341830171:web:2960f943b0bf7ccd5f76be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()