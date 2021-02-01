import * as firebase from 'firebase' 
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHv9MKIL3goJQEu-rAB_ObOnBzuXktdwQ",
    authDomain: "wily-1d965.firebaseapp.com",
    projectId: "wily-1d965",
    storageBucket: "wily-1d965.appspot.com",
    messagingSenderId: "913563290325",
    appId: "1:913563290325:web:d9e812e0b84c9f9fddf05c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
