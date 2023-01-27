import React, { useEffect, useState } from "react";
import { PinPreview } from "../../02-Molecules/ImgPreview/PinPreview";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp,} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from 'firebase/storage';
import { Link } from "react-router-dom";
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
  
   
    (async function loadPinFYP() { 
      try{
      const recentMessagesQuery = query(collection(getFirestore(), 'Pin'), orderBy('timestamp', 'desc'), limit(21));
    
      onSnapshot(recentMessagesQuery, function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
          if (change.type === 'removed') {
            deleteMessage(change.doc.id);
          } else {
            let pinData= change.doc.data();
           
           
            return  pinArray.push(pinData)
          }
        });
      }); 
    }
    catch{
      console.log("Ryuk didn't like the data")
    }
    return console.log('ryu');
    }())

  

  
  

  return(
    <div className="body">

      {
        (
        pin.map(pin => 
          <Link to={`Pin/${pin.storageUri}`}>
            <PinPreview
              pin={pin}
            />
          </Link>
          )
        )
        
      }
   

    
    </div>
  )

}