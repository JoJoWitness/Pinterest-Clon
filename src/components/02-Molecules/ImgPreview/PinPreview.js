import React from "react";
import { PreviewTxt } from "../../01-Atoms/Txt/PreviewTxt";
import './PinPreview.scss'

export const PinPreview = (props) => {

  const {pin} = props
  console.log(pin)
  return(
    <div className='PinPreview'>
      <img
        src={pin.file}
      />
      <PreviewTxt
        txt={pin.title}
        />
    </div>
  )
}

