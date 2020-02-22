import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export const AuthProvider = props => {
  const [user, setUser] = useState(null)

  return <AuthContext.Provider value={{ user }} {...props} />
}

export const useAuth = () => useContext(AuthContext)
