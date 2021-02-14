import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUOIccnHOcHsb6hhnMdfNI_NuJY0Jc2cE",
    authDomain: "crwn-db-b9ddf.firebaseapp.com",
    projectId: "crwn-db-b9ddf",
    storageBucket: "crwn-db-b9ddf.appspot.com",
    messagingSenderId: "622637197432",
    appId: "1:622637197432:web:6679aa701bb50fa886658d",
    measurementId: "G-96LVKC6G69"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;