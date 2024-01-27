// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL6Hy63rClReIHf1XasVcZgA1bWOn_4os",
  authDomain: "mi-priv-prueba.firebaseapp.com",
  databaseURL: "https://mi-priv-prueba-default-rtdb.firebaseio.com",
  projectId: "mi-priv-prueba",
  storageBucket: "mi-priv-prueba.appspot.com",
  messagingSenderId: "737505286515",
  appId: "1:737505286515:web:3ff7d7998211e5af908d06",
  measurementId: "G-SGPSH5CVNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authGlobalFirebase = getAuth(app);
