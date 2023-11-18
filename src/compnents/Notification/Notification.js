import React from 'react'
import style from './Notification.module.css'


const Notification = ({mode,text}) => {
  return (
    <div className={style.container} onClick={(e) => {
        // e.stopPropagation()

        e.currentTarget.style.display = 'none'
        }}>
        {mode === 'error' && <div className={`${style.messageIcon} ${style.errorIcon}`}>!</div>}
        {mode === 'success' && <div className={`${style.messageIcon} ${style.successIcon}`}>{':)'}</div>}
        <div className={style.messageText}>{text}</div>
    </div>
  )
}

export default Notification