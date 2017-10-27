import React from 'react'
import { Link } from 'react-router-dom'

import {
  CreateAccount,
  EmailVerication
} from '../firebase'

import Input from '../components/Input'
import Button from '../components/Button'

class Register extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const { email, password } = event.target

    CreateAccount(email.value, password.value)
      .then(EmailVerication)
      .then(() => this.props.history.push('/login'))
      .catch(console.log)
  }

  render () {
    return (
      <div className="view flex-column middle center">
        <div className="form-login papper">
          <form method="post" onSubmit={event => this.handleSubmit(event)}>
            <h2>Sign Up</h2>

            <Input label="E-mail" name="email" type="email" />
            <Input label="Password" name="password" type="password" />

            <Button className="button" type="submit">register</Button>

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