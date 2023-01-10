import React from "react";
import { ImgPreview } from "../../02-Molecules/ImgPreview/ImgPreview";
import { ImgPreview2 } from "../../02-Molecules/ImgPreview/ImgPreview";
import { ImgPreview3 } from "../../02-Molecules/ImgPreview/ImgPreview";
import { ImgPreview4 } from "../../02-Molecules/ImgPreview/ImgPreview";
import './body.scss'

export function Body() {

  return(
    <div className="body">
      <ImgPreview/>
      <ImgPreview2/>
      <ImgPreview3/>
      <ImgPreview4/>
      <ImgPreview/>
      <ImgPreview2/>
      <ImgPreview3/>
      <ImgPreview4/>
      <ImgPreview/>
      <ImgPreview2/>
      <ImgPreview3/>
      <ImgPreview4/>
      <ImgPreview/>
      <ImgPreview2/>
    </div>
  )

}