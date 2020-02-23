import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

import { Field } from '../components/Input'
import { Button } from '../components/Button'
import { Content } from '../components/Content'
import { Papper } from '../components/Papper'
import { Title, Link } from '../components/Typograph'
import { FlexBox } from '../components/Flex'

const RegisterPage = () => {
  const history = useHistory()
  const { user, register, sendEmailVerification } = useAuth()

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
    await sendEmailVerification()
  }

  return (
    <Content>
      <Papper>
        <form method="post" onSubmit={handleSubmit}>
          <Title as="h2">Sign Up</Title>

          <Field label="E-mail" name="email" type="email" />
          <Field label="Password" name="password" type="password" />

          <Button className="button" type="submit">
            register
          </Button>

          <FlexBox align="center" justify="space-between">
            <Link to="login">Sigin In</Link>
          </FlexBox>
        </form>
      </Papper>
    </Content>
  )
}

export default RegisterPage
