import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

import { Field } from '../components/Input'
import { Button } from '../components/Button'
import { Content } from '../components/Content'
import { Papper } from '../components/Papper'
import { FlexBox } from '../components/Flex'
import { Title, Link } from '../components/Typograph'

const RecoverPage = () => {
  const history = useHistory()
  const { sendEmailRecover } = useAuth()

  const handleSubmit = async event => {
    event.preventDefault()

    /* oh */
    const {
      email: { value: email },
    } = event.target

    await sendEmailRecover(email)
    history.replace('login')
  }

  return (
    <Content>
      <Papper>
        <form method="post" onSubmit={handleSubmit}>
          <Title>Recover Password</Title>

          <Field label="E-mail" name="email" type="email" />

          <Button type="submit">Send</Button>

          <FlexBox align="center" justify="space-between">
            <Link to="login">Sign In</Link>
          </FlexBox>
        </form>
      </Papper>
    </Content>
  )
}

export default RecoverPage
