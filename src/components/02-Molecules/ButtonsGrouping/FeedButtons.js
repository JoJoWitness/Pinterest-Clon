import React from "react";
import { SimpleButton} from "../../01-Atoms/SimpleButtons/SimpleButton";
import './ButtonsGrouping.scss'

export function FeedButtons(){
  return(
    <div className="feedBtns">
      <SimpleButton
      text='Home'
      className='feedBtn'/>
      <SimpleButton
      className='feedBtn'
      text='Today'/>
      <SimpleButton
      className='feedBtn'
      text='Create'/>
    </div>
  )
}