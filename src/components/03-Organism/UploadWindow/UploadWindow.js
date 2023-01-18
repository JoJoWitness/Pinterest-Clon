import React from "react";
import { ImgUpload } from "../../01-Atoms/ImgUpload/ImgUpload";
import { TxtUpload } from "../../02-Molecules/txtUpload/TxtUpload";
import './uploadWindow.scss'
// import { saveImageMessage } from "../../../App";


export const UploadWindow = () =>{

  return(
    <div className="uploadBody">
      <form className="uploadWindow">
        <ImgUpload/>
        <TxtUpload/>
        <button type="button" className="uploadPinBtn" >Guardar</button>
      </form>
    </div>
  )

}