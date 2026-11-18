import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCunFfrRhPxaXLRc2aBt8PqODWG6ywDW8o",
  authDomain: "gita-electronics-98c67.firebaseapp.com",
  projectId: "gita-electronics-98c67",
  storageBucket: "gita-electronics-98c67.firebasestorage.app",
  messagingSenderId: "978497387126",
  appId: "1:978497387126:web:76328843e3b754c8637d57",
  measurementId: "G-C3Y54D3W35"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
