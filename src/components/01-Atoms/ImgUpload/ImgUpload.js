import React, { useState } from "react";
import './imgUpload.scss'

export const ImgUpload = (props) => {
  const {pinImg, setPinImg} = props;
 

  function handleChange(event) {
    setPinImg(URL.createObjectURL(event.target.files[0]))
  }

  return(
    
    <label className="imgUploadBtn" htmlFor="img">Select image:
    <input className="imgUploadInput"
      type="file"
      id="img"
      name="img"
      accept="image/*"
      onChange={handleChange}/>
    <p >Maximun image size is 5Mb </p>
    <img className="imgPreview" src={pinImg}></img>
    </label>
  );
}
