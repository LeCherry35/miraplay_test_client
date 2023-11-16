import React from 'react'
import style from './Notification.module.css'


const Notification = (props) => {
  return (
    <div className={style.container} onClick={(e) => {
        // e.stopPropagation()

        e.currentTarget.style.display = 'none'
        }}>
        {props.mode === 'error' && <div className={`${style.messageIcon} ${style.errorIcon}`}>!</div>}
        {props.mode === 'success' && <div className={`${style.messageIcon} ${style.successIcon}`}>{':)'}</div>}
        <div className={style.messageText}>{props.text}</div>
    </div>
  )
}

export default Notification