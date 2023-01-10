import React from "react";
import { IconButton} from "../../01-Atoms/SimpleButtons/IconButton";
import Notification from '../../../assets/icons/Notification.svg'
import Messages from '../../../assets/icons/Chat.svg'
import User from '../../../assets/icons/User.svg'
import './ButtonsGrouping.scss'

export function UserButtons(){
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
      <IconButton
      src={User}
      alt='Account'
      className='iconBtn'/>
    </div>
  )
}