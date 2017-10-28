import React from 'react'
import { Link } from 'react-router-dom'

import { resetPasswordEmail } from '../firebase'

import Input from '../components/Input'
import Button from '../components/Button'

const handleSubmit = (event) => {
  event.preventDefault()
  const { email } = event.target

  resetPasswordEmail(email.value)
    .then(() => {
      console.log('Envio de email pra resetar senha')
    })
    .catch(console.log)
}

const Recover = () => (
  <div className="view flex-column middle center">
    <div className="form-login papper">
      <form method="post" onSubmit={handleSubmit}>
        <h2>Recover</h2>

        <Input label="E-mail" name="email" type="email" />

        <Button type="submit">Send</Button>

        <div className="options flex middle between">
          <Link to="login">Sign In</Link>
        </div>
      </form>
    </div>
  </div>
)

export default Recover