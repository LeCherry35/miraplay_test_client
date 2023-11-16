import React, { useRef, useState } from 'react'
import style from './AllGames.module.css'
import { useDispatch, useSelector } from 'react-redux'
import GameShortcut from '../GameShortcut/GameShortcut'
import { useQuery } from '@tanstack/react-query'
import allGamesService from '../../services/allGamesService'
import Loader from '../Loader/Loader'
import Notification from '../Notification/Notification'

const AllGames = () => {
    const genres = ["ALL","FREE",  "MOBA", "SHOOTERS", "LAUNCHERS", "MMORPG", "STRATEGY", "FIGHTING", "RACING", "SURVIVAL","ONLINE"]
   

    const genresItems = useRef()
    const dispatch = useDispatch()

    const [ genreSelected, setGenreSelected ] = useState('FREE')
    const [ isFreshGameFirst, setIsFreshGameFirst] = useState(true)
    const [ page, setPage] = useState(1)
    const { isAuth } = useSelector(state => state.auth)
    const { gamesListLength, games } = useSelector(state=> state.games)

    const  fetchGames = async () => {
        if(isAuth) {
            const {data} = await allGamesService.fetchGames(page, genreSelected, isFreshGameFirst, 9)
            dispatch({type: 'ADD_GAMES',payload: data})
            return data
        }
    }
    const {data, isLoading} = useQuery({
        queryFn: fetchGames,
        queryKey: ['games', genreSelected, page, isFreshGameFirst, isAuth]
    })

    // useEffect(()=>{
    //     if (data) dispatch({type:'SET_GAMES', payload: data})
    // },[data,isSuccess])
    
  return (
    <div className={style.container}>
    {!isAuth && <Notification text='Увійдіть для перегляду ігр'  mode='error'/>}
    {isLoading && <Loader/>}
    <h4 className={style.title}>Всі ігри</h4>
    <div className={style.filterContainer}>
        <ul className={style.genresItemList } ref={genresItems}>
            {genres.map(genre => (
                <div className={genre === genreSelected ? style.genresItemSel : style.genresItem} onClick={(e)=> {
                    setGenreSelected(e.target.innerHTML)
                    setPage(1)
                    }}>
                    {genre}
                </div>
            ))}
        </ul>
        <div className={style.dataSortContainer}>
            <div>Сортувати:</div>
            <div className={style.dataSort} onClick={()=> setIsFreshGameFirst(is => !is)}>{isFreshGameFirst ? 'спочатку нові' : 'спочатку старі'}</div>
        </div>
    </div>

    <ul className={style.gamesList}>
        {games?.map(game => {
            return <GameShortcut game={game}/>
            })}
    </ul>
    {gamesListLength > games.length && <button className={style.moreButton} onClick={() => setPage(page=> ++page)}>Показати ще</button>}
    </div>
  )
}

export default AllGames