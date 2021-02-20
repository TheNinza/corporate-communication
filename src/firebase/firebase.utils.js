import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtyGGyclEqKnfsEyHHi784Hm0ADDQjaSc",
  authDomain: "corporate-comms.firebaseapp.com",
  projectId: "corporate-comms",
  storageBucket: "corporate-comms.appspot.com",
  messagingSenderId: "393604605042",
  appId: "1:393604605042:web:b4693c89b77b2b7c460eeb",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
