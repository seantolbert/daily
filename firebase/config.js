import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZkQKlbJRWvJjdWsumvK1534hd1qeax2U",
  authDomain: "daily-76277.firebaseapp.com",
  projectId: "daily-76277",
  storageBucket: "daily-76277.appspot.com",
  messagingSenderId: "234375068665",
  appId: "1:234375068665:web:b6efdc5246741732ff9b28",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const Auth = getAuth();
const Storage = getStorage();

export { db, Auth, Storage };
