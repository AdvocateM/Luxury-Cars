import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../Hooks/useAuthStatus'
import Spinner from './Spinner'


const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign_in' />
}

export default PrivateRoute
