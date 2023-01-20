import React from "react";
import { PinPreview } from "../../02-Molecules/ImgPreview/PinPreview";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp,} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from 'firebase/storage';
import './body.scss'

export function HomeBody() {

  const pinArray = ['1'];
  function loadPinFYP() {
    const recentMessagesQuery = query(collection(getFirestore(), 'Users', 'Jordano Pernia', 'Pin'), orderBy('timestamp', 'desc'), limit(12));
    
    // Start listening to the query.
    onSnapshot(recentMessagesQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        if (change.type === 'removed') {
          deleteMessage(change.doc.id);
        } else {
          let pinInfo= change.doc.data();
          console.log(pinInfo)
          let pin = {
            "src": pinInfo.src,
            "title": pinInfo.title,
          }
          return pinArray.unshift(pin)
        }
      });
    });
  }
  
  loadPinFYP()
  console.log(pinArray)

  return(
    <div className="body">
      
    {pinArray.map((pin) => 
        console.log(pin))}

    
    </div>
  )

}