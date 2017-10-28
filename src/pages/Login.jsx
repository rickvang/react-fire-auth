import React from 'react'
import { Link } from 'react-router-dom'
import { IoSocialGithub, IoSocialGoogle, IoSocialFacebook } from 'react-icons/lib/io'

import { AuthenticateWithPassword } from '../firebase'

import Input from '../components/Input'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class Login extends React.Component {
  handleSubmit (event) {
    event.preventDefault()
    const { email, password } = event.target

    AuthenticateWithPassword(email.value, password.value)
      .then(user => this.props.history.push('/users'))
      .catch(console.log)
  }

  render () {
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
            <IoSocialGithub onClick={() => window.alert('trying event handler')} />
            <IoSocialGoogle />
            <IoSocialFacebook />
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default Login