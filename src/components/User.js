import React from 'react'
import PropTypes from 'prop-types'
import { map, prop, includes } from 'ramda'

import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'
import { Content } from './Content'
import { Papper } from './Papper'
import { FlexBox } from './Flex'
import { Avatar } from './Avatar'
import { Title, Text } from './Typograph'

const getUserProvidersId = map(prop('providerId'))

const User = ({ user, handleSignOut, onProviderLink, providers }) => {
  const pids = getUserProvidersId(user.providers)

  return (
    <Content>
      <Papper>
        <FlexBox align="center" justify="space-between">
          <Avatar
            alt={user.name || user.email}
            src={user.photo || 'http://i.pravatar.cc/300'}
          />

          <div>
            <Title>{user.name}</Title>
            <small>{user.email}</small>
          </div>
        </FlexBox>

        <br />

        <Button onClick={handleSignOut}>Sair</Button>

        <br />
        <Text>link yours accounts</Text>
        <ButtonGroup>
          {providers &&
            providers
              .filter(provider => !includes(`${provider}.com`, pids))
              .map(provider => (
                <Button key={provider} onClick={() => onProviderLink(provider)}>
                  {provider}
                </Button>
              ))}
        </ButtonGroup>
      </Papper>
    </Content>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  onProviderLink: PropTypes.func.isRequired,
  providers: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default User
