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

// async function ryu() {try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// }ryu()


// async function riu() {try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// }riu()

const querySnapshot = async function() { await getDocs(collection(db, "users"));}
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});




  return (
    <>
    <NavBar
      currentUser={currentUser}
      createPinWindow={createPinWindow}
      useCreatePinWindow={useCreatePinWindow}
      signIn={signIn}
      signOut={signOutUser}
    />
    {/* {
    (createPinWindow) 
    ? <PinWindow/>
    : <HomeBody/>
    } */}

    <UploadWindow/>
    </>
  )
};

// initializeApp(firebaseAppConfig);

initializeApp(firebaseConfig)


export default App
