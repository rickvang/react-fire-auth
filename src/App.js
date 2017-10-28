import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import {
  isAuthencated
} from './firebase'

import Home from './pages/Home'
import Users from './pages/Users'
import Login from './pages/Login'
import Recover from './pages/Recover'
import Register from './pages/Register'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/recover" component={Recover} />
    <Route path="/register" component={Register} />
    <Route path="/users" render={protectRouter(Users)} />
  </Switch>
)

const protectRouter = Component => props =>
  isAuthencated()
    ? <Component {...props} />
    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />

export default App