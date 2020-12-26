import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyA_2qzm0HVaHDI9hlNx3IH5Y-7D2uwlO24",
  authDomain: "hackathon-hcmute-2020.firebaseapp.com",
  projectId: "hackathon-hcmute-2020",
  storageBucket: "hackathon-hcmute-2020.appspot.com",
  messagingSenderId: "913164349281",
  appId: "1:913164349281:web:ac0adfe03f9558667e9f20",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const quesCollection = db.collection("users");

// export utils/refs
export { db, auth, quesCollection };
