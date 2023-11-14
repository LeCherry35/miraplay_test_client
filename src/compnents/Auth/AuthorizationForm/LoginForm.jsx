import React, { useState } from 'react'
import style from './AuthorizationForm.module.css'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query'
import AuthService from '../../../services/authService'
import $api from '../../../http/index'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {formDisplayed} = useSelector(state => state.authPanel)
  // const { data, isLoading, error } = useQuery({
  //   queryFn: registration
  // })

  const regMutation = useMutation({
    mutationFn:({email, password}) => {
      return $api.post('/auth/registration', {email, password})
    }
  })
  const logMutation = useMutation({
    mutationFn:({email, password}) => {
      return $api.post('/auth/login', {email, password})
    }
  })

  // const registration = async () => {
  //   try {
  //     const response =  await $api.post('/auth/registration', {email, password})
  //     // AuthService.registration(email, password)
  //     console.log('rrr', response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //     }
  
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
          logMutation.mutate({email, password})
        }}
      >ВХІД</button>
      : <button 
        className={style.submitButton}
        onClick={e => {
          e.preventDefault()
          regMutation.mutate({email, password})
        }}
      >РЕЄСТРАЦІЯ</button>
      }
      

    </form>
  )
}

export default LoginForm