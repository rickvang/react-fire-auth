import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

const UserPage = () => {
  const history = useHistory()
  const { user } = useAuth()

  /**
   * If user not exists redirect to login
   */
  if (!user) {
    history.replace('/login')
  }

  return <spane>User</spane>
}

export default UserPage
