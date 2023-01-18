import React from "react";
import { TxtInput } from "../../01-Atoms/TxtInput/txtInput";
import './txtUpload.scss'

export const TxtUpload = () =>{

  return(
    <div className="txtUpload">
      <TxtInput
      id='pinTitle'
      labelTxt='Add a Title'
      className='inputTitle'
      maxLength='50'/>
      <p className="userName">JoJoVeller</p>
      <TxtInput
       id='pinDescription'
       labelTxt='Add a Description'
       className='inputDescription'
       maxLength='400'/>
    </div>
  )
}