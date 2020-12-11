import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBF8NB-8mn-NWFkJWrNsEHT_os19SxjyGk",
    authDomain: "facebook-clone-7c3a5.firebaseapp.com",
    projectId: "facebook-clone-7c3a5",
    storageBucket: "facebook-clone-7c3a5.appspot.com",
    messagingSenderId: "682857164607",
    appId: "1:682857164607:web:1883d3ccf82d3c903c2d8a",
    measurementId: "G-SEZTXC0H04"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new  firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;