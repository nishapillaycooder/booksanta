import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyDBuHfBFgk4PqwjtJy3jVuudhNLk2vsQLA",
  authDomain: "santa-1fcd5.firebaseapp.com",
  projectId: "santa-1fcd5",
  storageBucket: "santa-1fcd5.appspot.com",
  messagingSenderId: "139365376428",
  appId: "1:139365376428:web:a14930a340bdec88685a09",
 // measurementId: "G-B78VZK5V74"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
