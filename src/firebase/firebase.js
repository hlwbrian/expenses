import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

//TODO: Config secret will be save in config file
const config = {
  apiKey: "AIzaSyAMseRtFcM-SP2cWT_0X3RDup5zeZ6V14A",
  authDomain: "expenses-e50d7.firebaseapp.com",
  databaseURL: "https://expenses-e50d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expenses-e50d7",
  storageBucket: "expenses-e50d7.appspot.com",
  messagingSenderId: "496355385013",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST",
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };