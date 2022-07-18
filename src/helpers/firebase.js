import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//   projectId: process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId: process.env.REACT_APP_FIREBASE_appId,
// });

const app = initializeApp({
  apiKey: "AIzaSyDqVbLkILfSkUpGBTHzDDbeMLaVIpz8x40",
  authDomain: "blog-app-context.firebaseapp.com",
  databaseURL: "https://blog-app-context-default-rtdb.firebaseio.com",
  projectId: "blog-app-context",
  storageBucket: "blog-app-context.appspot.com",
  messagingSenderId: "34765753561",
  appId: "1:34765753561:web:30452d2692f5553f2a02c8"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
