// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPJfKzh4rw2hkgt2pneY2QhkmNO8yDhZM",
    authDomain: "digital-buisness-card.firebaseapp.com",
    databaseURL: "https://digital-buisness-card-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "digital-buisness-card",
    storageBucket: "digital-buisness-card.appspot.com",
    messagingSenderId: "125571856585",
    appId: "1:125571856585:web:8fe238593a0f5bcb253518"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);