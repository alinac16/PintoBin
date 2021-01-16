import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.PINTOBIN_FIREBASE_apiKey,
  authDomain: process.env.PINTOBIN_FIREBASE_authDomain,
  projectId: process.env.PINTOBIN_FIREBASE_projectId,
  storageBucket: process.env.PINTOBIN_FIREBASE_storageBucket,
  messagingSenderId: process.env.PINTOBIN_FIREBASE_messagingSenderId,
  appId: process.env.PINTOBIN_FIREBASE_appId,
  measurementId: process.env.PINTOBIN_FIREBASE_measurementId,
});

// export const auth = app.auth()
export default app;
