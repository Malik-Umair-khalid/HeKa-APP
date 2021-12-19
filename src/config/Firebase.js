import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM_4zX9u3abAkyU6fZGYLRxmiakFFZI4g",
  authDomain: "my-assignments-1279e.firebaseapp.com",
  projectId: "my-assignments-1279e",
  storageBucket: "my-assignments-1279e.appspot.com",
  messagingSenderId: "681637152242",
  appId: "1:681637152242:web:2e24488f5acc085279576b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const storageRef = ref(storage, "Images");
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy,
  storage,
  storageRef,
  uploadBytes,
  uploadString
};
