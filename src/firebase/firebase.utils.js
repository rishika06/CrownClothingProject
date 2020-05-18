import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdaTceKoHpk55PI0nCXuLYlz_d9Jf3gtQ",
  authDomain: "crwn-db-910b4.firebaseapp.com",
  databaseURL: "https://crwn-db-910b4.firebaseio.com",
  projectId: "crwn-db-910b4",
  storageBucket: "crwn-db-910b4.appspot.com",
  messagingSenderId: "69611220925",
  appId: "1:69611220925:web:3be2055ae410bb7f0eecd4",
  measurementId: "G-6R6KYPZ9S5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
