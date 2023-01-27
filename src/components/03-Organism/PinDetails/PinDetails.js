import React from "react";
import { SimpleButton } from "../../01-Atoms/SimpleButtons/SimpleButton";
import { PinText } from "../../01-Atoms/Txt/PinText";
import { PinTitle } from "../../01-Atoms/Txt/PinTitle";
import { useState, useEffect } from "react";
import './PinDetails.scss'
import cover from '../../../assets/imgs/cover5.jpg'
import { db } from "../../../App";
import { getFirestore, collection, addDoc, query, getDoc, getDocs, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp, where} from 'firebase/firestore';





export const PinDetails = (props) => {
  const [pinData, setPinData] = useState([]);
  const pinInfo = []

  
  let href = window.location.href
  const hrefArray = href.split("Pin/")
  
  let storageUri = hrefArray[1]
  

  useEffect(() =>{
    setPinData(pinInfo)
    

    },[]);
  
  (async function loadPinFYP() {
    
    try{
      const pinRef = query(collection(db, "Pin"), where("storageUri", "==", storageUri));
      const querySnapshot = await getDocs(pinRef);
      querySnapshot.forEach((doc) => {
      let pin = doc.data();
      pinInfo.push(pin)
    });
      }
  catch{
    console.log("Ryuk doesn't have the data")
  }
  
  }()) 

  console.log(pinData)


  return(
  <div className="uploadBody">

    {
      pinData.map(
        pin =>
        <Pin pin={pin}/>
      )
    }

  </div>
  )
}

const Pin = (props) => {
  const {pin} = props
  return(

      <div className="pinBody">
        <img className='pinImg' src={pin.file}/>
      <div className="pinText">
        <SimpleButton
          className='colorBtn'
          text='Save'
          />
        <span>
          <PinTitle
            txt={pin.title}
          />
          <PinText
          txt={pin.description}/>
        </span>
      </div>
    </div>)
}