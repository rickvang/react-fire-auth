import React from 'react'

import {
  auth,
  logout,
  GitHubAuth,
  GoogleAuth,
  facebookAuth,
  TwitterAuth,
  authStateChanged,
  githubProvider,
  facebookProvider,
  twitterProvider
} from './firebase'

import User from './components/User'

import './app.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      user: null
    }

    this.handleUserState = this.handleUserState.bind(this)
  }

  componentWillMount () {
      authStateChanged(this.handleUserState)
  }

  facebookLogin () {
    facebookAuth()
      .then(({user}) =>
        this.handleUserState(user)
      )
  }
  
  githubLogin () {
    GitHubAuth()
      .then(({user}) =>
        this.handleUserState(user)
      )
  }

  googleLogin () {
    GoogleAuth()
      .then(({user}) =>
        this.handleUserState(user)
      )
  }

  twitterLogin () {
    TwitterAuth()
      .then(({user}) =>
        this.handleUserState(user)
      )
  }

  linkGithub () {
    auth()
      .currentUser
      .linkWithPopup(githubProvider)
  }

  linkFacebook () {
    auth()
      .currentUser
      .linkWithPopup(facebookProvider)
  }

  linkTwitter () {
    auth()
      .currentUser
      .linkWithPopup(twitterProvider)
  }

  handleUserState (user) {
    this.setState({
      user
    })
  }

  logout () {
    logout()
      .then(() =>
        this.setState({
          user: null
        })
      )
  }

  render () {
    const { user } = this.state

    if (!user) {
      return (
        <div className="content">
          <button className="btn-github" onClick={() => this.githubLogin()}>Login with Github</button>
          <button className="btn-google" onClick={() => this.googleLogin()}>Login with Google</button>
          <button className="btn-facebook" onClick={() => this.twitterLogin()}>Login with Twitter</button>
          <button className="btn-facebook" onClick={() => this.facebookLogin()}>Login with Facebook</button>
        </div>
      )
    }

    return (
      <div className="content">
        <User
          user={user}
          logout={() => this.logout()}
          linkGithub={() => this.linkGithub()}
          linkFacebook={() => this.linkFacebook()}
          linkTwitter={() => this.linkTwitter()}
        />
      </div>
    )
  }
}

export default App
