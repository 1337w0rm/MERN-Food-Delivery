import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh3pwUgKFpAo92R-9ewPbc6m8P_WIKM5k",
  authDomain: "finalproject-aditya.firebaseapp.com",
  projectId: "finalproject-aditya",
  storageBucket: "finalproject-aditya.appspot.com",
  messagingSenderId: "664180311446",
  appId: "1:664180311446:web:22a69e1f1536ba583089b7",
  measurementId: "G-31NZVCHB4M"
};

  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};