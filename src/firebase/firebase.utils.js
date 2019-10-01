import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB72inOsfDFh-Mzr55zcmeiMA15o6z5YrQ",
    authDomain: "crwn-db-bd04f.firebaseapp.com",
    databaseURL: "https://crwn-db-bd04f.firebaseio.com",
    projectId: "crwn-db-bd04f",
    storageBucket: "",
    messagingSenderId: "178577809471",
    appId: "1:178577809471:web:a8c10ff99d988ebf1ed88a",
    measurementId: "G-5DGVPWDV0X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;