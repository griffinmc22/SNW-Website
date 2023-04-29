// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Assigning environment variables to constants
const apiKey = import.meta.env.VITE_APP_API_KEY;
const authDomain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_APP_PROJECT_ID;
const storageBucket = import.meta.env.VITE_APP_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_APP_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_APP_ID;
const measurementId = import.meta.env.VITE_APP_MEASUREMENT_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
