
import { getAuth,  GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
import Cookies from "js-cookie";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

async function google(){
    try {
        const result = await signInWithPopup( auth,provider);
        const idToken = await result.user.getIdToken();
        Cookies.set('firebaseToken', idToken, { expires: 15, secure: true, sameSite: 'Strict' });
        Cookies.set('Profile', result.user.displayName, { expires: 15, secure: true, sameSite: 'Strict' });
        const userRef =  doc(db, 'user', result.user.uid); // Document reference for Firestore
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            window.location.href = '/' // Redirect to user details page if they already exist
          }else{
          
        await setDoc(userRef, {
    Name: result.user.displayName,
    email: result.user.email,
   payment:false
  });

  window.location.href = '/'

          }

        // Call the backend function to verify the ID toke
    } catch (error) {
        console.error('Error during sign-up:', error);
    }
};
























export default google