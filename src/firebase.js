// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6qK6sO0DlBfyA-Ro-AqT6Sd5FEU0rnOk",
  authDomain: "chat-app-yt-3a717.firebaseapp.com",
  projectId: "chat-app-yt-3a717",
  storageBucket: "chat-app-yt-3a717.appspot.com",
  messagingSenderId: "588533626004",
  appId: "1:588533626004:web:916974d1166dc07ffe3081",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
