import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import GlobalStyles from './styles/global'

import HomePage from './pages/home'
import UserPage from './pages/user'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import RecoverPage from './pages/recover'

const App = () => (
  <>
    <GlobalStyles />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/recover" component={RecoverPage} />
      <Route path="/me" component={UserPage} />

      <Redirect to="/" />
    </Switch>
  </>
)

export default App
