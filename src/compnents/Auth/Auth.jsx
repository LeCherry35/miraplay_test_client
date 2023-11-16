import React, { useState } from 'react'
import style from './Auth.module.css'
import LoginForm from './AuthorizationForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../services/authService'
import { useMutation, useQuery } from '@tanstack/react-query'

const Auth = () => {
    const { data, isSuccess: authIsSuccess, isLoading, isError, error } = useQuery({
        queryFn: authService.checkToken(localStorage.getItem('token')),
        queryKey: ['auth']
      })
    
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({type:'LOG_OUT'})
    }
    

    return (
        <div className={style.container}>
            <div className={style.backdrop} onClick={() => dispatch({type:'TOGGLE_AUTH_DISPLAY'})}></div>
            <div className={style.content}>
            {isAuth
            ?   <><div className={style.navPanel}></div>
                <button className={style.submitButton} onClick={logout}>ВИХІД</button>
                </>
            : <><div className={style.navPanel}>
                    <button className={style.navButton} onClick={() => dispatch({type: 'SHOW_LOGIN_FORM'})}>ВХІД</button>
                    <button className={style.navButton} onClick={() => dispatch({type: 'SHOW_REGISTRATION_FORM'})}>РЕЄСТРАЦІЯ</button>

                </div>
                <LoginForm/>
                </>
            }
            </div>

        </div>
    )
}

export default Auth