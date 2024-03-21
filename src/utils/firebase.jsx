// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyAFzdcjhEFH4j8Oe0OZmfwHLgnnrs_Dk",
  authDomain: "netflix-gpt-391bf.firebaseapp.com",
  projectId: "netflix-gpt-391bf",
  storageBucket: "netflix-gpt-391bf.appspot.com",
  messagingSenderId: "34648482667",
  appId: "1:34648482667:web:1bb537cf5a3e94d121222e",
  measurementId: "G-709WMXPFWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
