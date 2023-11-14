import React from 'react'
import style from './AllGames.module.css'
import { useSelector } from 'react-redux'
import GameShortcut from '../GameShortcut/GameShortcut'

const AllGames = () => {

    // const games = useSelector(state => state.allGames)
    const games = [{
        _id:'65154bae59c15dd8d5497a64',
        commonGameName:"Rust",
        gameDescription: "Rust — комп'ютерна гра в жанрі симулятора виживання була створена неза…",
        gameImage: "https://media.contentapi.ea.com/content/dam/eacom/en-au/migrated-images/2016/10/en-us-featured-image.jpg.adapt.crop16x9.1023w.jpg",
        genre: "SURVIVAL",
        inTop: true,
        }
        ]
    const genres = ["ALL","FREE",  "MOBA", "SHOOTERS", "LAUNCHERS", "MMORPG", "STRATEGY", "FIGHTING", "RACING", "SURVIVAL","ONLINE"]
  return (
    <div className={style.container}>
    <h4 className={style.title}>Всі ігри</h4>
    <ul className={style.genresItemList}>

        {genres.map(genre => (
            <div className={style.genresItem}>
                {genre}
            </div>
        ))}
    </ul>
    <ul className={style.gamesList}>
        {games.map(game => <GameShortcut game={game}/>)}
    </ul>
    </div>
  )
}

export default AllGames