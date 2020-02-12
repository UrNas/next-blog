import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDDyb1kmIDKpwXFFQW-5RqsLrW1QgTYub8",
  authDomain: "next-firebase-36d99.firebaseapp.com",
  databaseURL: "https://next-firebase-36d99.firebaseio.com",
  projectId: "next-firebase-36d99",
  storageBucket: "next-firebase-36d99.appspot.com",
  messagingSenderId: "719150954201",
  appId: "1:719150954201:web:aa6bca5ffdd4ab8a4e30c8",
  measurementId: "G-RL4L447FNS"
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage()
// firebase.analytics();
export {
    firestore,
    storage
}
export default firebase;
