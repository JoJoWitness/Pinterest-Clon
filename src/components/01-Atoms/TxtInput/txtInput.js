import React from "react";
import './txtInput.scss'

export const TxtInput = (props) => {

  const {id, labelTxt, className, maxLength} = props

  return(
    <>
    <label htmlFor={id} className='inputLabel'>{labelTxt} </label>
    <textarea type="text" id={id} name={id} placeholder={labelTxt} className={className} maxLength={maxLength}/>
   
    </>
  );
}
