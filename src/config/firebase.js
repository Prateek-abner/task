import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS2wGZm5oNkzpThWUY1jfQ75P23fhhWlI",
    authDomain: "taskm-ec9a5.firebaseapp.com",
    projectId: "taskm-ec9a5",
    storageBucket: "taskm-ec9a5.appspot.com",
    messagingSenderId: "841831112729",
    appId: "1:841831112729:web:3e231cf59b027a2682ca88",
    measurementId: "G-SK3Y5MD6EY"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
