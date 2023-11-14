import React, { useState } from 'react'
import style from './AuthorizationForm.module.css'
import { useSelector } from 'react-redux'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {formDisplayed} = useSelector(state => state.authPanel)

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
      <button className={style.submitButton}
        onClick={e => {
          e.preventDefault()
        }}
      >{formDisplayed === 'login' ? 'ВХІД' : 'РЕЄСТРАЦІЯ'}</button>

    </form>
  )
}

export default LoginForm