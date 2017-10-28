import React from 'react'

import {
  Logout,
  isLinked,
  LinkWith,
  UnlinkFrom,
  AuthStateChanged
} from '../firebase'

import User from '../components/User'

class Users extends React.Component {
  constructor () {
    super()

    this.state = {
      user: {}
    }
  }

  componentWillMount () {
    AuthStateChanged(user => {
      user
        ? this.handleUserState(this.transformUser(user))
        : this.props.history.push('/login')
    })
  }

  handleUserState (user) {
    this.setState({
      user
    })
  }

  transformUser (user) {
    return {
      email: user.email,
      photo: user.photoURL,
      emailVerified: user.emailVerified,
      name: user.displayName || user.email.split('@')[0],
      providers: user.providerData
    }
  }

  render () {
    const { user } = this.state

    console.log(user)

    if (!Object.keys(user).length) {
      return (
        <span>loading...</span>
      )
    }

    return (
      <User
        user={user}
        handleSignOut={Logout}
        handleProviders={
          provider => isLinked(provider) 
            ? UnlinkFrom(provider)
            : LinkWith(provider)
        }
      />
    )
  }
}

export default Users