// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa-8FwJakZkRFAk4PdnCMt6UFiNV3-YNw",
  authDomain: "coffee-store-3f25b.firebaseapp.com",
  projectId: "coffee-store-3f25b",
  storageBucket: "coffee-store-3f25b.appspot.com",
  messagingSenderId: "429153674911",
  appId: "1:429153674911:web:4641528b7ec4580a22e4aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;