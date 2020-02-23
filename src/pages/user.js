import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

import Button from '../components/Button'

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

  return (
    <div>
      <span>{user.name || user.email}</span>
      <Button onClick={signout}>Sign Out</Button>
    </div>
  )
}

export default UserPage
