// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKrG0g57xyznH-IY6XzIFoVPWWSTKGAk",
  authDomain: "cookups-9212e.firebaseapp.com",
  projectId: "cookups-9212e",
  storageBucket: "cookups-9212e.appspot.com",
  messagingSenderId: "867943944225",
  appId: "1:867943944225:web:3b34be5259f6d871c31360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;