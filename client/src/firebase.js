import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDuvuG_lUGkp26v2piTNPxrOAT709XnSBU",
  authDomain: "admin-dashboard-demo-956c2.firebaseapp.com",
  projectId: "admin-dashboard-demo-956c2",
  storageBucket: "admin-dashboard-demo-956c2.appspot.com",
  messagingSenderId: "145922470424",
  appId: "1:145922470424:web:330dbde6a55c4bfb2e496d",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const quesCollection = db.collection("questions");
const messagesCollection = db.collection("messages");

// export utils/refs
export { db, auth, quesCollection, messagesCollection };
