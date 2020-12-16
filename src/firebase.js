// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "",
    authDomain: "chat-c2c22.firebaseapp.com",
    databaseURL: "https://chat-c2c22.firebaseio.com",
    projectId: "chat-c2c22",
    storageBucket: "chat-c2c22.appspot.com",
    messagingSenderId: "510468643612",
    appId: "1:510468643612:web:9e5a0bc45b8ad0d84b38d9"
  };
  firebase.initializeApp(firebaseConfig)
  export const authh = firebase.auth()
  export const database = firebase.database()
