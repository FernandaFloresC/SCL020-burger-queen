
//Conexión con Firebase
import { initializeApp } from "firebase/app";

import {getFirestore, collection, getDocs, addDoc,onSnapshot, query, doc, getDoc, deleteDoc } from '@firebase/firestore'
//configuracion firebase
import { firebaseConfig } from './config.js';
//Importando funciones firebase auth
import { getAuth, signInWithEmailAndPassword,  GoogleAuthProvider  } from '@firebase/auth'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Autenticación
const auth = getAuth();
// Get firestore
const db = getFirestore(app);


//Exportar funciones firebase-firestore
export { initializeApp, signInWithEmailAndPassword, auth, provider, GoogleAuthProvider, collection, getDocs, addDoc,onSnapshot, query, doc, db, deleteDoc, getDoc };
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
// } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
// import {
//     getFirestore,
//     addDoc,
//     collection,
// } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
// import firebaseConfig from "./firebaseConfig";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// const auth = getAuth();

// export {
//     app,
//     db,
//     auth,
//     createUserWithEmailAndPassword,
//     addDoc,
//     collection,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
// };