import React from "react";

import { IconButton} from "../../01-Atoms/SimpleButtons/IconButton";
import Notification from '../../../assets/icons/Notification.svg'
import Messages from '../../../assets/icons/Chat.svg'
import User from '../../../assets/icons/User.svg'
import './ButtonsGrouping.scss'
import { SimpleButton } from "../../01-Atoms/SimpleButtons/SimpleButton";

export function UserButtons(props){

const {signIn, signOut, currentUser} = props

  return(
    <div className="userBtns">
      <IconButton
      src={Notification}
      alt='Notifications'
      className='iconBtn'/>
      <IconButton
      src={Messages}
      alt='Messages'
      className='iconBtn'/>

      {
      (currentUser.email)
      ? <IconButton
      src={currentUser.photoURL}
      alt='Account'
      className='iconBtn'
      fn={signIn}
      />
      :<IconButton
      src={User}
      alt='Account'
      className='iconBtn'
      fn={signIn}
      />
      }
{/* 
    <IconButton
      src={User}
      alt='Account'
      className='iconBtn'
      fn={signIn}
      /> */}
  <SimpleButton
      className='feedBtn'
      text='Sign out'
      fn={signOut}/>
    </div>
  )
}