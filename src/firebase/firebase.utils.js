import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAl5utSBT11UC0LdrR40EYr5FiaRYuWbKY",
    authDomain: "crwn-db-2e1e4.firebaseapp.com",
    projectId: "crwn-db-2e1e4",
    storageBucket: "crwn-db-2e1e4.appspot.com",
    messagingSenderId: "706823676208",
    appId: "1:706823676208:web:d73afd973a6ec59a16e8f5"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
    
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user",error.message)
    }

  }

  return userRef;

 }
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;