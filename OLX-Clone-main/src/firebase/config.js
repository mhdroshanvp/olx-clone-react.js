import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBbA6hvNwW2OllDaUdSZtPYZD1l8MVanZs",
  authDomain: "olx-clone-react-35442.firebaseapp.com",
  projectId: "olx-clone-react-35442",
  storageBucket: "olx-clone-react-35442.appspot.com",
  messagingSenderId: "105276977874",
  appId: "1:105276977874:web:ca80fea43ef480ceacb30b",
  measurementId: "G-QDK1CV04VP"
};

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore, storage };
export default firebaseExports;