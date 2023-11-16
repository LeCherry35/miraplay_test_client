import React, { useRef, useState } from 'react'
import style from './AllGames.module.css'
import { useSelector } from 'react-redux'
import GameShortcut from '../GameShortcut/GameShortcut'
import { useQuery } from '@tanstack/react-query'
import allGamesService from '../../services/allGamesService'
import Loader from '../Loader/Loader'
import Notification from '../Notification/Notification'

const AllGames = () => {
    const genres = ["ALL","FREE",  "MOBA", "SHOOTERS", "LAUNCHERS", "MMORPG", "STRATEGY", "FIGHTING", "RACING", "SURVIVAL","ONLINE"]
    const gamesMinQuantity = 9

    const genresItems = useRef()
    const [ genreSelected, setGenreSelected ] = useState('FREE')
    const [ isFreshGameFirst, setIsFreshGameFirst] = useState(true)
    const [ gamesToShow, setGamesToShow] = useState(9)
    const { isAuth } = useSelector(state => state.auth)

    const  fetchGames = async () => {
        if(isAuth) {
            const {data} = await allGamesService.fetchGames(1, genreSelected, isFreshGameFirst, gamesToShow)
            return data
        }
    }
    const {data, isLoading} = useQuery({
        queryFn: fetchGames,
        queryKey: ['games', genreSelected, gamesToShow, isFreshGameFirst, isAuth]
    })

    // useEffect(()=>{
    //     if (data) dispatch({type:'SET_GAMES', payload: data})
    // },[data,isSuccess])
    
  return (
    <div className={style.container}>
    {!isAuth && <Notification text='Увійдіть для перегляду ігр'/>}
    {isLoading && <Loader/>}
    <h4 className={style.title}>Всі ігри</h4>
    <div className={style.filterContainer}>
        <ul className={style.genresItemList } ref={genresItems}>
            {genres.map(genre => (
                <div className={genre === genreSelected ? style.genresItemSel : style.genresItem} onClick={(e)=> {
                    setGenreSelected(e.target.innerHTML)
                    // // genresItems.current.childNodes.forEach(genreItem => genreItem.classList.remove(style.selectedGenre))
                    // e.target.classList.add(style.selectedGenre)
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
        {data?.games?.map(game => <GameShortcut game={game}/>)}
    </ul>
    {gamesToShow < data?.gamesListLength && <button className={style.moreButton} onClick={() => setGamesToShow(q => q + gamesMinQuantity)}>Показати ще</button>}
    </div>
  )
}

export default AllGames