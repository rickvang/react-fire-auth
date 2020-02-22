import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {
  IoSocialGithub,
  IoSocialGoogle,
  IoSocialFacebook,
} from 'react-icons/lib/io'

import { useAuth } from '../context/auth'

import { AuthWith } from '../firebase'

import Input from '../components/Input'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

const LoginPage = () => {
  const history = useHistory()
  const { user } = useAuth()

  /**
   * if user exists then redirect to profile page
   */
  if (user) {
    history.replace('/me')
  }

  return (
    <div className="view flex-column middle center">
      <div className="form-login papper">
        <form method="post" onSubmit={event => this.handleSubmit(event)}>
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

        <ButtonGroup>
          <Click key="github" onClick={() => AuthWith('github')}>
            <IoSocialGithub />
          </Click>
          <Click key="google" onClick={() => AuthWith('google')}>
            <IoSocialGoogle />
          </Click>
          <Click key="facebook" onClick={() => AuthWith('facebook')}>
            <IoSocialFacebook />
          </Click>
        </ButtonGroup>
      </div>
    </div>
  )
}

const Click = props => props.children

export default LoginPage
