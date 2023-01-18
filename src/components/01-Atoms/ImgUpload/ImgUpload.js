import React from "react";
import './imgUpload.scss'

export const ImgUpload = () => {

  return(
    
    <label className="imgUploadBtn" htmlFor="img">Select image:
    <input className="imgUploadInput" type="file" id="img" name="img" accept="image/*"/>
    <p >Maximun image size is 5Mb </p>
    </label>
  );
}
