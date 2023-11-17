import React, { useRef, useState } from 'react'
import style from './AllGames.module.css'
import { useDispatch, useSelector } from 'react-redux'
import GameShortcut from '../GameShortcut/GameShortcut'
import { useQuery } from '@tanstack/react-query'
import allGamesService from '../../services/allGamesService'
import Loader from '../Loader/Loader'
import authService from '../../services/authService'

const AllGames = () => {
    const genres = ["FREE",  "MOBA", "SHOOTERS", "LAUNCHERS", "MMORPG", "STRATEGY", "FIGHTING", "RACING", "SURVIVAL","ONLINE"]
   

    const genresItems = useRef()
    const dispatch = useDispatch()

    const [ genreSelected, setGenreSelected ] = useState('FREE')
    const [ isFreshGameFirst, setIsFreshGameFirst] = useState(true)
    const [ page, setPage] = useState(1)
    const { gamesListLength, games } = useSelector(state => state.games)

    const  fetchGames = async () => {
        if(authService.isToken) {
            const {data} = await allGamesService.fetchGames(page, genreSelected, isFreshGameFirst, 9)
            dispatch({type: 'ADD_GAMES',payload: data})
            return data
        }
    }
    const {isLoading} = useQuery({
        queryFn: fetchGames,
        queryKey: ['games', genreSelected, page, isFreshGameFirst]
    })
  return (
    <div className={style.container}>
    {isLoading && <Loader/>}
    <h4 className={style.title}>Всі ігри</h4>
    <div className={style.filterContainer}>
        <ul className={style.genresItemList } ref={genresItems}>
            {genres.map((genre,id) => (
                <div key={id} className={genre === genreSelected ? style.genresItemSel : style.genresItem} onClick={(e)=> {
                    setGenreSelected(e.target.innerHTML)
                    setPage(1)
                    }}>
                    {genre}
                </div>
            ))}
        </ul>
        <div className={style.dataSortContainer}>
            <div>Сортувати:</div>
            <div className={style.dataSort} 
                onClick={()=> {
                    setIsFreshGameFirst(is => !is)
                    setPage(1)
                }}
            >
                {isFreshGameFirst ? 'спочатку нові' : 'спочатку старі'}
            </div>
        </div>
    </div>

    <ul className={style.gamesList}>
        {games?.map((game,id) => {
            return <GameShortcut key={id} game={game}/>
            })}
    </ul>
    {gamesListLength > games.length && <button className={style.moreButton} onClick={() => setPage(page=> ++page)}>Показати ще</button>}
    </div>
  )
}

export default AllGames