import { FC, useCallback } from 'preact/compat'
import { useAuth } from '../../providers/AuthProvider'
import { Authenticate } from '../../components/Authenticate'
import { auth } from '../../firebase'

const Index: FC = () => {
  const { user } = useAuth()

  const handleLogout = useCallback(async () => await auth.signOut(), [])
  console.log(user)

  return (
    <div>
      <div>Current user: {user?.displayName}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export const Component: FC = () => {
  const { user } = useAuth()
  return (
    <Authenticate predicate={() => !!user} redirect="/signup">
      <Index />
    </Authenticate>
  )
}
