import React from 'react'

import {
  Logout,
  AuthStateChanged
} from '../firebase'

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
      name: user.displayName,
      emailVerified: user.emailVerified
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
      <div>
        <h2>Hello {user.name || user.email.split('@')[0]}</h2>
        <button className="button" onClick={() => Logout()}>sigin out</button>
      </div>
    )
  }
}

export default Users