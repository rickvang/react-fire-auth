import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Content } from './Content'
import { Papper } from './Papper'
import { FlexBox } from './Flex'
import { Avatar } from './Avatar'

const User = ({ user, handleSignOut, handleProviders }) => (
  <Content>
    <Papper>
      <FlexBox align="center" justify="space-between">
        <Avatar
          alt={user.name || user.email}
          src={user.photo || 'http://i.pravatar.cc/300'}
        />

        <div>
          <h3>{user.name}</h3>
          <small>{user.email}</small>
        </div>
      </FlexBox>

      <br />

      <Button onClick={handleSignOut}>Sair</Button>
    </Papper>
  </Content>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleProviders: PropTypes.func.isRequired,
}

export default User
