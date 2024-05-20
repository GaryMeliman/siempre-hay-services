import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROYECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID
} = process.env;

//TODO cambiar a env
const firebaseConfig = {
    apiKey: "AIzaSyAwSQEN-WToiIKQWRjiV9nQbhFHcsZ1BEA",
    authDomain: "siempre-hay-sol.firebaseapp.com",
    projectId: "siempre-hay-sol",
    storageBucket: "siempre-hay-sol.appspot.com",
    messagingSenderId: "446897893262",
    appId: "1:446897893262:web:847c9fa750af97c7537edf",
    measurementId: "G-4ZZLBXMZBT"
};
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);
export const firestore = firebase.firestore();