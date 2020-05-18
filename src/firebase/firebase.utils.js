import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCnrLiUwybUwCic1IqxHzbkMz7pFbPHmGg",
  authDomain: "crown-db-48a80.firebaseapp.com",
  databaseURL: "https://crown-db-48a80.firebaseio.com",
  projectId: "crown-db-48a80",
  storageBucket: "crown-db-48a80.appspot.com",
  messagingSenderId: "93002515567",
  appId: "1:93002515567:web:cd041ee782381144fb799a",
  measurementId: "G-SJG0VVR7HV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

  //   console.log("from firebase", snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
