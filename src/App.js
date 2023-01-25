import React, {useState, useEffect}  from "react";
import { HomeBody } from "./components/03-Organism/HomeBody/HomeBody";
import { NavBar } from "./components/03-Organism/Navbar/Navbar";
import { UploadWindow } from "./components/03-Organism/UploadWindow/UploadWindow";
import './main.scss'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { app } from "./firebase-config";
import {getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut,} from 'firebase/auth';


import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp,} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from 'firebase/storage';


export const db = getFirestore(app);
export const storage = getStorage(app);

initializeApp(firebaseConfig)

const App = () => {

  const [createPinWindow, useCreatePinWindow] = useState(false) 

  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
    emailVerified:"",
});






const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');
const spaceRef = ref(storage, 'images/space.jpg');


const signIn = async function signInPopUp() {

  await signInWithPopup(auth, provider)
  const user = auth.currentUser
  setCurrentUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
})};

const signOutUser = function signOutUser() { signOut(auth).then(() => {
  setCurrentUser({
    displayName: "",
    email: "",
    photoURL: "",
    emailVerified: "",
});
}).catch((error) => {
});}






  return (
    <>
    <NavBar
      currentUser={currentUser}
      createPinWindow={createPinWindow}
      useCreatePinWindow={useCreatePinWindow}
      signIn={signIn}
      signOut={signOutUser}
    />
    
    <HomeBody
    />

    {/* <UploadWindow
      currentUser={currentUser}
    /> */}
    </>
  )
};

// initializeApp(firebaseAppConfig);




export default App
