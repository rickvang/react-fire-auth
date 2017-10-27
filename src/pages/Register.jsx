import React from 'react'
import { Link } from 'react-router-dom'

import {
  CreateAccount,
  EmailVerication
} from '../firebase'

class Register extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const { email, password } = event.target

    CreateAccount(email.value, password.value)
      .then(EmailVerication)
      .then(() => {
        console.log('Enviando email de verificação')
      })
      .catch(console.log)
  }

  render () {
    return (
      <div className="view flex-column middle center">
        <div className="form-login papper">
          <form method="post" onSubmit={event => this.handleSubmit(event)}>
            <h2>Register</h2>

            <label className="field-group">
              <span className="label">E-mail</span>
              <input className="field-input" name="email" type="email"/>
            </label>

            <label className="field-group">
              <span className="label">Password</span>
              <input className="field-input" name="password" type="password"/>
            </label>

            <button className="button" type="submit">register</button>

            <div className="options flex middle between">
              <Link to="login">Sigin In</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register