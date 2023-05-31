import { User, onAuthStateChanged } from 'firebase/auth'
import { FC, useContext, useEffect, useState, createContext } from 'preact/compat'
import { auth } from '../firebase'

type AuthValue = {
  user: User | null
  completed: boolean
}

const AuthContext = createContext<AuthValue | null>(null)

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [completed, setCompleted] = useState(false)

  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUser(user)
        setCompleted(true)
      }),
    []
  )

  return (
    <AuthContext.Provider value={{ user, completed }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)!
