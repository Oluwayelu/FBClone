import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXTJS_FIREBASE_APIKEY,
  authDomain: process.env.NEXTJS_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXTJS_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXTJS_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXTJS_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXTJS_FIREBASE_APIID,
  measurementId: process.env.NEXTJS_FIREBASE_MEASUREMENTID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
