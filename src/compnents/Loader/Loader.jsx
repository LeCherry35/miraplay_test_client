import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.container}>
        <div className={style.lds_default}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader