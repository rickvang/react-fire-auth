import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="view flex-column center middle">
    <h1>React + Firebase authentication</h1>
    <Link to="/me">Dashboard</Link>
  </div>
)

export default Home
