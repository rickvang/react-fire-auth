import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import UserPage from './pages/user'
import LoginPage from './pages/login'
import Recover from './pages/Recover'
import Register from './pages/Register'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route path="/recover" component={Recover} />
    <Route path="/register" component={Register} />
    <Route path="/me" component={UserPage} />

    <Redirect to="/" />
  </Switch>
)

export default App
