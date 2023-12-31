// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Navigate} from 'react-router-dom'
import authService from '../services/authService'
import { useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import Loader from '../compnents/Loader/Loader'
import Notification from '../compnents/Notification/Notification'

const PrivateRoute = ({ children }) => {
     const dispatch = useDispatch()

const checkAuth = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      return null
    }
    const {data} = await authService.checkToken(token)
    dispatch({type: 'SET_USER', payload: data})
    return data
  } catch (e) {
    localStorage.removeItem('token')
  }
    
  }

  const { isLoading, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuth
  })

  if (isLoading) return <Loader />
  if (isError) return <Notification text={'Користувач не авторизований'} mode='error'/>

  return authService.isToken ? <>{children}</> : <Navigate to='/auth' />
}

export default PrivateRoute