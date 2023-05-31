import { FC } from 'preact/compat'
import { useAuth } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom'
import { Spinner } from './Spinner'

type AuthenticateProps = {
  predicate: () => boolean
  redirect: string
}

export const Authenticate: FC<AuthenticateProps> = ({
  children,
  predicate,
  redirect
}) => {
  const { completed } = useAuth()
  if (completed) {
    if (predicate()) return <>{children}</>
    return <Navigate to={redirect} replace />
  }
  return <Spinner />
}
