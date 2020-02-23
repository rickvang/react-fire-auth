import React, { useContext, useEffect, useState } from 'react'
import { applySpec, prop, isNil, unless, pipe } from 'ramda'
import { auth } from '../firebase'

const AuthContext = React.createContext()

/**
 * @TODO: move user details to user-context
 */
const userSpec = applySpec({
  email: prop('email'),
  photo: prop('photoURL'),
  verified: prop('emailVerified'),
  name: prop('displayName'),
  /**
   * Providers will usefull to handle with
   * link and unlink social midia accounts.
   */
  providers: prop('providerData'),
})

const userOrNil = unless(isNil, userSpec)

export const AuthProvider = props => {
  const [user, setUser] = useState(null)

  const handleUserChange = pipe(userOrNil, setUser)

  useEffect(() => {
    auth.onAuthStateChanged(handleUserChange)
  }, [handleUserChange])

  const register = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const signin = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const signout = () => auth.signOut()

  const sendEmailVerification = () => auth.currentUser.sendEmailVerification()

  return (
    <AuthContext.Provider
      value={{ user, register, signout, signin, sendEmailVerification }}
      {...props}
    />
  )
}

export const useAuth = () => useContext(AuthContext)
