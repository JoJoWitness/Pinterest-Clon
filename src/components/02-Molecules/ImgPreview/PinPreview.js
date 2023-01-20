import React from "react";
import { PreviewTxt } from "../../01-Atoms/Txt/PreviewTxt";
import './PinPreview.scss'
import Cover from '../../../assets/imgs/cover.png'
import Cover2 from '../../../assets/imgs/cover2.jpg'
import Cover3 from '../../../assets/imgs/cover3.png'
import Cover4 from '../../../assets/imgs/cover4.png'

export const PinPreview = (props) => {

  const {pin} = props
  return(
    <div className='imgPreview'>
      <img
        src={pin.src}
      />
      <PreviewTxt
        txt={pin.title}
        />
    </div>
  )
}

export const ImgPreview2 = (props) => {
  return(
    <div className='imgPreview'>
      <img
        src={Cover2}
      />
      <PreviewTxt
        txt='JoJoLion Cover'
        />
    </div>
  )
}

export const ImgPreview3 = (props) => {
  return(
    <div className='imgPreview'>
      <img
        src={Cover3}
      />
      <PreviewTxt
        txt='JoJoLion Cover'
        />
    </div>
  )
}

export const ImgPreview4 = (props) => {
  return(
    <div className='imgPreview'>
      <img
        src={Cover4}
      />
      <PreviewTxt
        txt='JoJoLion Cover'
        />
    </div>
  )
}