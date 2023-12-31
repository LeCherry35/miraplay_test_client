import React, { useState } from 'react'
import style from './AuthorizationForm.module.css'
import { useDispatch} from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import authService from '../../../services/authService'
import Notification from '../../Notification/Notification'
import Loader from '../../Loader/Loader'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({form, setForm}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const registration = async (email, password) => {
      await authService.registration(email, password)
      setForm('log')
  }
  const login = async (email, password) => {
      const response = await authService.login(email, password)
      dispatch({type:'SET_USER', payload: response.data.user})
      localStorage.setItem('token', response.data.token)
      navigate('/')
  }
  const validate = () => {
    if (email.trim() === '') {
      setEmailError('введіть пошту')
      return false
    }
    else setEmailError('')
    if (password.trim().length < 3 || password.trim().length > 20) {
      setPasswordError('пароль має бути довжиною 3-20 символів')
      return false
    }
    else setPasswordError('')
    return true
  }
  
  const {mutate:registrationMutate, isLoading: registrationIsLoading, isError: registrationIsError, error: registrationError, isSuccess: registationIsSuccess} = useMutation({
    mutationFn: registration,
    mutationKey: ['registation']
  })
  const { mutate: loginMutate, isLoading: loginIsLoading, isError: loginIsError, error: loginError} = useMutation({
    mutationFn: login,
    mutationKey: ['login']
  })
  
  

  return (
    <form className={style.container}>
    {(registrationIsLoading || loginIsLoading) && <Loader />}
    {registrationIsError && <Notification text={registrationError?.response?.data?.message || 'Невідома помилка'} mode='error' />}
    {loginIsError && <Notification text={loginError.response.data.message}  mode='error'/>}
    {registationIsSuccess && <Notification text='Козистувач успішно зареєстрований, увійдіть для продовження' mode='success'/>}
      <h3 className={style.title}>
      Спробуй нові відчуття
      </h3>
      <p className={style.subTitle}>{form === 'log' ? 'Увійди' : 'Зареєструйся'}, щоб грати на максималках у свої улюблені ігри</p>
      <label className={style.label}>
      введіть ваш email:
      <input className={`${style.input} ${emailError && style.inputError}`} type="text" name="email" placeholder="youremail@miraplay.com" value={email} 
        onChange={e => setEmail(e.target.value)}
      ></input>
      {emailError &&<p className={style.validationError}>{emailError}</p>}
      </label>
      <label className={style.label}>
      введіть ваш пароль:
      <input className={`${style.input} ${passwordError && style.inputError}`} type="password" name="password" placeholder="ваш пароль" value={password} 
        onChange={e => setPassword(e.target.value)}
      ></input>
      {passwordError &&<p className={style.validationError}>{passwordError}</p>}

      </label>
      {form === 'log' 
      ?  <button 
        className={style.submitButton}
        onClick={e => {
          e.preventDefault()
          if (validate()) loginMutate({email, password})
        }}
      >ВХІД</button>
      : <button 
        className={style.submitButton}
        onClick={e => {
          e.preventDefault()
          if (validate()) registrationMutate({email, password})
        }}
      >РЕЄСТРАЦІЯ</button>
      }
      

    </form>
  )
}

export default LoginForm