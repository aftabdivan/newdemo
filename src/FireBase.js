//import firebase from "firebase";
import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig ={
    apiKey: "AIzaSyBE-tndDrpLe6iXIRD2dePYjhKEfnn8FWw",
    authDomain: "login-demo-fab24.firebaseapp.com",
    projectId: "login-demo-fab24",
    storageBucket: "login-demo-fab24.appspot.com",
    messagingSenderId: "1085055528097",
    appId: "1:1085055528097:web:0b795baf971e010ccad4e0"
  };

  const app=initializeApp(firebaseConfig);
   const db=getFirestore(app);
  //export default db;

  export default db;