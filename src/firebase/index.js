
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzgIBhsKcU3ea6gHVod0U9tu65cnGaiaE",
  authDomain: "app-taller-firebase.firebaseapp.com",
  projectId: "app-taller-firebase",
  storageBucket: "app-taller-firebase.appspot.com",
  messagingSenderId: "337181423698",
  appId: "1:337181423698:web:1ddccf48c52e0be1fac78b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };