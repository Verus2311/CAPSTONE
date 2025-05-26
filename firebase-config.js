// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBcMc0YY-WwRqVNbYaLc8087RohRe-1JVQ",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tee-green-spa.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tee-green-spa",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tee-green-spa.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "626364577015",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:626364577015:web:d8f38c463437dc50a24ff2",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-P7YGYXT0PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firebase instances
export { app, analytics, db, auth }; 