// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf6dh2ej-mn5TQXrZEZxdBOk6A5XAarUo",
    authDomain: "summit-8891a.firebaseapp.com",
    projectId: "summit-8891a",
    storageBucket: "summit-8891a.appspot.com",
    messagingSenderId: "871610780620",
    appId: "1:871610780620:web:aef4c2df47dbb05b05ab69",
    measurementId: "G-7BEFWSSJ90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)

export default function () { <></> }
