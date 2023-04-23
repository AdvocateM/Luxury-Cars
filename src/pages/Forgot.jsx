import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Forgot() {
  const loggedIn = false
  return loggedIn ? <Outlet /> : <Navigate to='/sign_in' />
}

export default Forgot
