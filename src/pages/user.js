import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

import User from '../components/User'

const UserPage = () => {
  const history = useHistory()
  const { user, signout } = useAuth()

  useEffect(() => {
    /**
     * If user not exists redirect to login
     */
    if (!user) {
      history.replace('/login')
    }
  }, [user, history])

  /**
   * @TODO: Add a property loader
   */
  if (!user) {
    return <span>loading...</span>
  }

  return <User user={user} handleSignOut={signout} />
}

export default UserPage
