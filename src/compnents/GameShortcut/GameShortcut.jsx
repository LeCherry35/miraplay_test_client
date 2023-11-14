import React from 'react'
import style from './GameShortcut.module.css'


const GameShortcut = ({game}) => {
  console.log('(((', game);
  return (
    <li className={style.container}>
    <img className={style.image} src={game.gameImage} alt={game.commonGameName}/>
    <div className={style.bottom}>
        <h4 className={style.title}>
            {game.commonGameName}
        </h4>
        <p className={style.description}>
            {game.gameDescription}
        </p>
    </div>
    </li>
  )
}

export default GameShortcut