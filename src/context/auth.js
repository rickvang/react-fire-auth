import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const AuthProvider = props => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [auth])

  const register = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  return <AuthContext.Provider value={{ user, register }} {...props} />
}

export const useAuth = () => useContext(AuthContext)
