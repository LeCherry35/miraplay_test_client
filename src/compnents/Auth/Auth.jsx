import React from 'react'
import style from './Auth.module.css'
import LoginForm from './AuthorizationForm/LoginForm'
import { useDispatch} from 'react-redux'

const Auth = () => {
    
    const dispatch = useDispatch()

    return (
        <div className={style.container}>
            <div className={style.backdrop} onClick={() => dispatch({type:'TOGGLE_AUTH_DISPLAY'})}></div>
            <div className={style.content}>
                <div className={style.navPanel}>
                    <button className={style.navButton} onClick={() => dispatch({type: 'SHOW_LOGIN_FORM'})}>ВХІД</button>
                    <button className={style.navButton} onClick={() => dispatch({type: 'SHOW_REGISTRATION_FORM'})}>РЕЄСТРАЦІЯ</button>

                </div>
                <LoginForm/>
            </div>

        </div>
    )
}

export default Auth