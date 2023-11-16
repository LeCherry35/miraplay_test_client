import React, { useEffect, useState } from 'react'
import style from './AuthorizationForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import authService from '../../../services/authService'
import Notification from '../../Notification/Notification'
import Loader from '../../Loader/Loader'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {formDisplayed} = useSelector(state => state.authPanel)

  useEffect(()=> {

  })

  

  const {mutate:registrationMutate, isLoading: registrationIsLoading, isError: registrationIsError, error: registrationError} = useMutation({
    mutationFn: authService.registration
  })
  const { data: loginData, mutate: loginMutate, isLoading: loginIsLoading, isError: loginIsError, error: loginError} = useMutation({
    mutationFn: authService.login
  })
  
  if (loginData) {
    dispatch({type:'SET_USER', payload: loginData})
    dispatch({type:'TOGGLE_AUTH_DISPLAY'})
    localStorage.setItem('token', loginData.data.token)
    navigate('/allGames')
  }

  return (
    <form className={style.container}>
    {(registrationIsLoading || loginIsLoading) && <Loader />}
    {registrationIsError && <Notification text={registrationError.response.data.message} />}
    {loginIsError && <Notification text={loginError.response.data.message} />}
      <h3 className={style.title}>
      Спробуй нові відчуття
      </h3>
      <p className={style.subTitle}>{formDisplayed === 'login' ? 'Увійди' : 'Зареєструйся'}, щоб грати на максималках у свої улюблені ігри</p>
      <label className={style.label}>
      введіть ваш email:
      <input className={style.input} type="text" name="email" placeholder="youremail@miraplay.com" value={email} 
        onChange={e => setEmail(e.target.value)}
      ></input>
      </label>
      <label className={style.label}>
      введіть ваш пароль:
      <input className={style.input} type="password" name="password" placeholder="ваш пароль" value={password} 
        onChange={e => setPassword(e.target.value)}
      ></input>
      </label>
      {formDisplayed === 'login' 
      ?  <button 
        className={style.submitButton}
        onClick={e => {
          e.preventDefault()
          loginMutate({email, password})
        }}
      >ВХІД</button>
      : <button 
        className={style.submitButton}
        onClick={e => {
          e.preventDefault()
          registrationMutate({email, password})
        }}
      >РЕЄСТРАЦІЯ</button>
      }
      

    </form>
  )
}

export default LoginForm