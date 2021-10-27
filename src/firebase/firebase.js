import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

//TODO: Config secret will be save in config file
const config = {
  apiKey: "AIzaSyAMseRtFcM-SP2cWT_0X3RDup5zeZ6V14A",
  authDomain: "expenses-e50d7.firebaseapp.com",
  databaseURL: "https://expenses-e50d7.firebaseio.com",
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

/* DATABASE Functions
try {
  // Add a new document in collection "cities"
  await setDoc(doc( collection(database, 'users'), "names"), {
    name: "Los Angeles200"
  });

  const data = await getDoc(doc(database, 'users', 'names'));
  console.log( data.data() );

}catch(e){
  console.log(e)
}*/

/* GOOGLE Login Functions*/
/*auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(auth.currentUser.email);
  } else {
    // No user is signed in.
    console.log('loggout2');
    console.log('loggout');
  }
});

signInWithPopup(auth, googleAuthProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    // may use user.email to save data
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
*/

//export { firebaseApp, googleAuthProvider, auth, database as default };