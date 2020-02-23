import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import UserPage from './pages/user'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/me" component={UserPage} />

    <Redirect to="/" />
  </Switch>
)

export default App
