import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAKNGtwi74Vj33NNDjCv-4Fi8SegibgQcQ",
    authDomain: "rpa-app-df0ac.firebaseapp.com",
    projectId: "rpa-app-df0ac",
    storageBucket: "rpa-app-df0ac.appspot.com",
    messagingSenderId: "515079502750",
    appId: "1:515079502750:web:be002aa42759a72f97748f"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);