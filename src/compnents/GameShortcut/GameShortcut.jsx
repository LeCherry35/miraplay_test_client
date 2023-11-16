import React from 'react'
import style from './GameShortcut.module.css'


const GameShortcut = ({game}) => {
  const {gameDescription, commonGameName} = game
  return (
    <li className={style.container}>
    <img className={style.image} src={game.gameImage} alt={commonGameName}/>
    <div className={style.bottom}>
        <h4 className={style.title}>
            {commonGameName}
        </h4>
        <p className={style.description}>
            {gameDescription.length > 120 ? gameDescription.substring(0,120) + '...' : gameDescription}
        </p>
    </div>
    </li>
  )
}

export default GameShortcut