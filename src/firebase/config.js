import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC4TAH5JENXEFvDnZuC8CpBtttybg6jknk",
  authDomain: "photo-ninja-2d719.firebaseapp.com",
  databaseURL: "https://photo-ninja-2d719.firebaseio.com",
  projectId: "photo-ninja-2d719",
  storageBucket: "photo-ninja-2d719.appspot.com",
  messagingSenderId: "594494451213",
  appId: "1:594494451213:web:9f39bbf335a2f09ba06f44",
  measurementId: "G-D8E3SXRDY2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }
