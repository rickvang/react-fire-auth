import React from 'react'
import './style.css'

const User = ({user, logout, linkGithub, linkFacebook, linkTwitter}) => (
  <div className="card-user">
    <img className="card-cover" src={user.photoURL} alt={user.displayName}/>
    <div className="card-meta">
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
    </div>

    <button className="card-button btn-facebook" onClick={linkFacebook}>Link Facebook</button>
    <button className="card-button btn-facebook" onClick={linkTwitter}>Link Twitter</button>
    <button className="card-button btn-github" onClick={linkGithub}>Link Github</button>

    <button className="card-button btn-logout" onClick={logout}>Logout</button>
  </div>
)

export default User
