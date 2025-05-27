// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tee-green-spa-d13d8.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tee-green-spa-d13d8",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tee-green-spa-d13d8.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:1234567890123456789012",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-P7YGYXT0PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firebase instances
export { app, analytics, db, auth }; 