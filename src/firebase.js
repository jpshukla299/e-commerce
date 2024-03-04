// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Y8kx91mUM5zq58s6cPf7vZwM806kCOI",
  authDomain: "e-commerce-39aae.firebaseapp.com",
  projectId: "e-commerce-39aae",
  storageBucket: "e-commerce-39aae.appspot.com",
  messagingSenderId: "7046198612",
  appId: "1:7046198612:web:c714a78a9c27efde7d84c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
