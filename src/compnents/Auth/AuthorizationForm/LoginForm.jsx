import React, { useEffect, useState } from 'react'
import style from './AuthorizationForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query'
import authService from '../../../services/authService'

const LoginForm = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {formDisplayed} = useSelector(state => state.authPanel)

  useEffect(()=> {

  })

  

  const {data: registrationData, mutate:registrationMutate} = useMutation({
    mutationFn: authService.registration
  })
  const { data: loginData, mutate: loginMutate } = useMutation({
    mutationFn: authService.login
  })
  
  if (loginData) {
    dispatch({type:'SET_USER', payload: loginData})
    localStorage.setItem('token', loginData.data.token)
  }

  return (
    <form className={style.container}>
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