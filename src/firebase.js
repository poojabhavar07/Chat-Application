import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBhlkXsb4Tga5gscr8EpJ_1T8XqTGK6pnI",
  authDomain: "chat-application-6e5a5.firebaseapp.com",
  projectId: "chat-application-6e5a5",
  storageBucket: "chat-application-6e5a5.appspot.com",
  messagingSenderId: "740880580709",
  appId: "1:740880580709:web:758cb0faf4b801ec22c68c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
