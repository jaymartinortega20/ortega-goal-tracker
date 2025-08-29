import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoNPy4kFj33ayB7JEOwjbJHVl5E-4Gh7I",
  authDomain: "goal-project-jmo-4369c.firebaseapp.com",
  projectId: "goal-project-jmo-4369c",
  storageBucket: "goal-project-jmo-4369c.firebasestorage.app",
  messagingSenderId: "1086284656106",
  appId: "1:1086284656106:web:b2c76e195e7a73796e9693"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);