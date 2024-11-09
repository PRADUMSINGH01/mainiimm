import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2VfZiGq-py52EfnkLAIl3DhywnnFDRqk",
  authDomain: "iimb-f94a0.firebaseapp.com",
  databaseURL: "https://iimb-f94a0-default-rtdb.firebaseio.com",
  projectId: "iimb-f94a0",
  storageBucket: "iimb-f94a0.appspot.com",
  messagingSenderId: "229645281431",
  appId: "1:229645281431:web:598da2268ded5acf1e61d2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
