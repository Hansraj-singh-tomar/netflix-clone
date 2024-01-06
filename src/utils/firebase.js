// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_T99X4EORUAUBhN4uEA_dfKQ1MtL1S24",
    authDomain: "netflix-gpt-53cd2.firebaseapp.com",
    projectId: "netflix-gpt-53cd2",
    storageBucket: "netflix-gpt-53cd2.appspot.com",
    messagingSenderId: "133546624958",
    appId: "1:133546624958:web:252004f47965566fb25bef",
    measurementId: "G-LTC0FP8S79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
