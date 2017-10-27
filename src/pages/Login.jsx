import React from 'react'
import { Link } from 'react-router-dom'
import { IoSocialGithub, IoSocialGoogle, IoSocialFacebook } from 'react-icons/lib/io'

import {
  AuthenticateWithPassword
} from '../firebase'

class Login extends React.Component {
  handleSubmit (event) {
    event.preventDefault()
    const { email, password } = event.target

    AuthenticateWithPassword(email.value, password.value)
      .then(user => {
        this.props.history.push('/users')
      })
      .catch(console.log)
  }

  render () {
    return (
      <div className="view flex-column middle center">
        <div className="form-login papper">
          <form method="post" onSubmit={event => this.handleSubmit(event)}>
            <h2>Signin In</h2>

            <label className="field-group">
              <span className="label">E-mail</span>
              <input className="field-input" name="email" type="email"/>
            </label>

            <label className="field-group">
              <span className="label">Password</span>
              <input className="field-input" name="password" type="password"/>
            </label>

            <button className="button" type="submit">Sign In</button>

            <div className="options flex middle between">
              <Link to="register">Forget my password</Link>
              <Link to="register">Register</Link>
            </div>
          </form>

          <hr />

          <div className="button-group">
            <button className="button"><IoSocialGithub /></button>
            <button className="button"><IoSocialGoogle /></button>
            <button className="button"><IoSocialFacebook /></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login