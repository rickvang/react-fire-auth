import React from 'react'
import PropTypes from 'prop-types'

import {
  IoLogOut,
  IoSocialGithub,
  IoSocialGoogle
} from 'react-icons/lib/io'

import Button from '../Button'

import './styles.css'

const findProvider = service => provider =>
  provider.providerId === service

const isLinked = (providers, service) =>
  providers.find(findProvider(service))

const User = ({user, handleSignOut, handleProviders}) => (
  <div className="view flex-column center middle">
    <div className="user-papper">
      <div className="flex middle between">
        <figure className="avatar user-avatar">
          <img className="circled" src={user.photo || 'http://i.pravatar.cc/300'} alt="Nome do avatar"/>
        </figure>

        <div className="user-meta">
          <h3>{user.name}</h3>
          <small>{user.email}</small>
        </div>
      </div>

      <hr />

      <div className="flex middle start">
        <Button
          className={`button-clean ${isLinked(user.providers, 'github.com') ? 'is-linked' : ''}`}
          onClick={() => handleProviders('github')}
        >
          <IoSocialGithub />
        </Button>

        <Button
          className={`button-clean ${isLinked(user.providers, 'google.com') ? 'is-linked' : ''}`}
          onClick={() => handleProviders('google')}
        >
          <IoSocialGoogle />
        </Button>

        <Button className="button-clean" onClick={handleSignOut}>
          <IoLogOut />
        </Button>
      </div>
    </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleProviders: PropTypes.func.isRequired
}

export default User