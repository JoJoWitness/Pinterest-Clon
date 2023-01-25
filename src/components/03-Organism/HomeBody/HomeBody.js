import React, { useEffect, useState } from "react";
import { PinPreview } from "../../02-Molecules/ImgPreview/PinPreview";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp,} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from 'firebase/storage';
import './body.scss'
import '../../02-Molecules/ImgPreview/PinPreview.scss'
import '../../01-Atoms/Txt/txt.scss'
import { render } from "react-dom";





export function HomeBody() {
  const [pin, usePin] = useState([]);
  const pinArray= [];


  useEffect(() =>{

    usePin(pinArray)

    },[]);
  


  (function loadPinFYP() { 
    try{
    const recentMessagesQuery = query(collection(getFirestore(), 'Users', 'Jordano Pernia', 'Pin'), orderBy('timestamp', 'desc'), limit(12));
 
    onSnapshot(recentMessagesQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        if (change.type === 'removed') {
          deleteMessage(change.doc.id);
        } else {
          let pinInfo= change.doc.data();
          let pinData = {
            "file": pinInfo.file,
            "title": pinInfo.title,
          }
          pinArray.push(pinData)
          return 
        }
      });
    }); 
  }
  catch{
    console.log("Ryuk didn't like the data")
  }
  }())

  
  

  return(
    <div className="body">

      {
        pin.map(pin => 
          <PinPreview
            pin={pin}
          />
          )


      }
   

    
    </div>
  )

}