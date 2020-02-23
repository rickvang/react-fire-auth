import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../context/auth'

import Input from '../components/Input'
import Button from '../components/Button'

const LoginPage = () => {
  const history = useHistory()
  const { user, signin } = useAuth()

  useEffect(() => {
    /**
     * if user exists then redirect to profile page
     */
    if (user) {
      history.replace('/me')
    }
  }, [user, history])

  /**
   * @TODO: add input validations
   */
  const handleSubmit = async event => {
    event.preventDefault()
    const { password, email } = event.target

    await signin(email.value, password.value)
  }

  return (
    <div className="view flex-column middle center">
      <div className="form-login papper">
        <form method="post" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <Input label="E-mail" name="email" type="email" />
          <Input label="Password" name="password" type="password" />

          <Button type="submit">Sign In</Button>

          <div className="options flex middle between">
            <Link to="recover">Forget my password</Link>
            <Link to="register">Register</Link>
          </div>
        </form>

        <hr />
      </div>
    </div>
  )
}

export default LoginPage
