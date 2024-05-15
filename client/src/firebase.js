// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cc36e.firebaseapp.com",
  projectId: "mern-estate-cc36e",
  storageBucket: "mern-estate-cc36e.appspot.com",
  messagingSenderId: "211749799621",
  appId: "1:211749799621:web:bd2e2993d0189d10af12ac",
  measurementId: "G-REZ1ZDP1KB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);