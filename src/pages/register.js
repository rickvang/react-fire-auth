import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

import Input from '../components/Input'
import Button from '../components/Button'

const RegisterPage = () => {
  const history = useHistory()
  const { user, register } = useAuth()

  useEffect(() => {
    /**
     * if user is already logged then we redirect to profile
     */
    if (user) {
      history.replace('/me')
    }
  }, [user, history])

  const handleSubmit = async event => {
    event.preventDefault()

    /**
     * we get the credentials here because we are using submit event,
     * so we dont need to use onChange on inputs.
     */
    const { email, password } = event.target

    await register(email.value, password.value)
  }

  return (
    <div className="view flex-column middle center">
      <div className="form-login papper">
        <form method="post" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <Input label="E-mail" name="email" type="email" />
          <Input label="Password" name="password" type="password" />

          <Button className="button" type="submit">
            register
          </Button>

          <div className="options flex middle between">
            <Link to="login">Sigin In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
