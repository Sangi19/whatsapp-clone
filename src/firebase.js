import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZDxgxdDfItb2U86myG21RwBJIbj728OU",
    authDomain: "whatsapp-clone-49e7c.firebaseapp.com",
    projectId: "whatsapp-clone-49e7c",
    storageBucket: "whatsapp-clone-49e7c.appspot.com",
    messagingSenderId: "253081168123",
    appId: "1:253081168123:web:1c52b5e898e9e32b07685e",
    measurementId: "G-SHY7R679HJ"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;