import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config data for firebase. This section can be pulic
const firebaseConfig = {
  apiKey: "AIzaSyDtyGGyclEqKnfsEyHHi784Hm0ADDQjaSc",
  authDomain: "corporate-comms.firebaseapp.com",
  projectId: "corporate-comms",
  storageBucket: "corporate-comms.appspot.com",
  messagingSenderId: "393604605042",
  appId: "1:393604605042:web:b4693c89b77b2b7c460eeb",
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Handling Authentication Methods
export const auth = firebase.auth();

// Selecting google for authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Handling Firestore Storage
export const firestore = firebase.firestore();

// Function to create document of users in the firestore storage

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // do nothing if the authentication state is null
  if (!userAuth) return;

  // adding the data to firebase
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL, uid } = userAuth;

    // getting time from firebase servers to maintain uniformity
    const createdAt = firebase.firestore.Timestamp.now();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        uid,
        createdAt,
        authorisedChatRooms: [],
        adminOfChatRooms: [],
        messagesSent: [],
      });
    } catch (error) {
      console.log("Error Creating User", error);
    }
  }

  // Returning userRef for accessability
  return userRef;
};

export default firebase;
