import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../context/auth'

import { Field } from '../components/Input'
import { Button } from '../components/Button'
import { Content } from '../components/Content'
import { Papper } from '../components/Papper'
import { Title, Link } from '../components/Typograph'
import { FlexBox } from '../components/Flex'
import { ButtonGroup } from '../components/ButtonGroup'

const LoginPage = () => {
  const history = useHistory()
  const { user, signin, signinWith } = useAuth()

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
    <Content>
      <Papper style={{ maxWidth: 300 }}>
        <form method="post" onSubmit={handleSubmit}>
          <Title as="h2">Sign In</Title>

          <Field label="E-mail" name="email" type="email" />
          <Field label="Password" name="password" type="password" />

          <Button type="submit">Sign In</Button>

          <FlexBox align="center" justify="space-between">
            <Link to="recover">Forget my password</Link>
            <Link to="register">Register</Link>
          </FlexBox>
        </form>

        <br />
        <ButtonGroup>
          {/* 
            here if user already create an account and try to signin with google,
            this account is automatically linked
          */}
          <Button onClick={() => signinWith('google')}>Google</Button>

          {/*
            1. here if user was already register we get the following error
            auth/account-exists-with-different-credential.

            2. if user trying to login using google provider when is already
            registered the provider will be replaced.

            @TODO: show an error for user requesting user login using another provider.
          */}
          <Button onClick={() => signinWith('github')}>Github</Button>
          <Button onClick={() => signinWith('twitter')}>Twitter</Button>
          <Button onClick={() => signinWith('facebook')}>FB</Button>
        </ButtonGroup>
      </Papper>
    </Content>
  )
}

export default LoginPage
