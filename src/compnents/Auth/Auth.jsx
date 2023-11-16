import React, { useState } from 'react'
import style from './Auth.module.css'
import LoginForm from './AuthorizationForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isAuth} = useSelector(state => state.auth)
    const [formDisplayed, setFormDisplayed] = useState('reg')

    const logout = () => {
        localStorage.removeItem('token')
        dispatch({type:'LOG_OUT'})
    }
    

    return (
        <div className={style.container}>
            <div className={style.backdrop} onClick={() => navigate('/')}></div>
            <div className={style.content}>
            {isAuth
            ?   <><div className={style.navPanel}></div>
                <button className={style.submitButton} onClick={logout}>ВИХІД</button>
                </>
            : <><div className={style.navPanel}>
                    <button className={formDisplayed === 'log' ? `${style.navButton_active} ${style.navButton}` : style.navButton} onClick={() => {setFormDisplayed('log')}}>ВХІД</button>
                    <button className={formDisplayed === 'reg' ? `${style.navButton_active} ${style.navButton}` : style.navButton} onClick={() => setFormDisplayed('reg')}>РЕЄСТРАЦІЯ</button>

                </div>
                <LoginForm form={formDisplayed} setForm={setFormDisplayed} />
                </>
            }
            </div>

        </div>
    )
}

export default Auth