import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className={style.container}>
            <div className={style.navigatonButton_container} onClick={()=>navigate('/allGames')}>Ігри</div>
            <div className={style.authButton_container} onClick={()=>dispatch({type:'TOGGLE_AUTH_DISPLAY'})}>
            {/* <svg class="Header_icon__KAtlG"><use href="/static/media/symbol.4050e793240adea219122f2b47914225.svg#icon-user"></use></svg> */}
            </div>

        </div>
  )
}

export default Header