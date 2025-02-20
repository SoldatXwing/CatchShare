// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// See: https://firebase.google.com/docs/web/setup#config-web-app
const firebaseConfig = {
  apiKey: "AIzaSyAHQlOD7vrbV02rxOjW3BFAWlzLabCEvTc",
  authDomain: "fishing-app-e5d58.firebaseapp.com",
  projectId: "fishing-app-e5d58",
  storageBucket: "fishing-app-e5d58.firebasestorage.app",
  messagingSenderId: "430980395742",
  appId: "1:430980395742:web:c77ee82f8d1109a58dc84f",
  measurementId: "G-KZTTV71VM3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
